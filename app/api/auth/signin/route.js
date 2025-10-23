import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from '@/models/User';
import { comparePassword, generateToken } from "@/lib/auth";

export async function POST(request) {
    console.log('=== SIGNIN API CALLED ===');
    
    try {
        // console.log('Step 1: Connecting to database...');
        await connectDB();
        // console.log('Step 1: Database connected ✓');

        // console.log('Step 2: Parsing request body...');
        const body = await request.json();
        const { email, password } = body;
        // console.log('Step 2: Request parsed ✓', { email });

        // Validate required fields
        if (!email || !password) {
            // console.log('Step 3: Validation failed - missing fields');
            return NextResponse.json(
                {
                    success: false,
                    error: "All fields are required",
                    message: "Please provide email and password"
                },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // console.log('Step 3: Validation failed - invalid email format');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Invalid email format',
                    message: 'Please provide a valid email address'
                },
                { status: 400 }
            );
        }

        // console.log('Step 3: Validation passed ✓');
        // console.log('Step 4: Finding user in database...');
        
        // Find user AND explicitly select the password field
        const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
        // console.log('Step 4: User query completed', { found: !!user });

        if (!user) {
            // console.log('Step 5: User not found');
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid credentials",
                    message: "Invalid email or password"
                },
                { status: 401 }
            );
        }

        // console.log('Step 5: User found ✓');
        // console.log('Step 6: Comparing password...');
        // console.log('Password field exists:', !!user.password);

        // Compare password
        let isPasswordValid = false;
        try {
            isPasswordValid = await comparePassword(password, user.password);
            // console.log('Step 6: Password comparison completed', { valid: isPasswordValid });
        } catch (compareError) {
            // console.error('Step 6: Password comparison error:', compareError);
            return NextResponse.json(
                {
                    success: false,
                    error: "Authentication error",
                    message: "Unable to verify credentials"
                },
                { status: 500 }
            );
        }

        if (!isPasswordValid) {
            // console.log('Step 7: Invalid password');
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid credentials",
                    message: "Invalid email or password"
                },
                { status: 401 }
            );
        }

        // console.log('Step 7: Password valid ✓');
        // console.log('Step 8: Generating token...');
        
        // Generate token
        const token = generateToken(user._id);
        // console.log('Step 8: Token generated ✓');

        // Remove password from response
        const userObject = user.toObject();
        delete userObject.password;

        // console.log('Step 9: Signin successful! Sending response...');

        return NextResponse.json({
            success: true,
            message: 'Signed in successfully!',
            user: {
                id: userObject._id,
                name: userObject.name,
                email: userObject.email,
                createdAt: userObject.createdAt
            },
            token
        }, { status: 200 });

    } catch (error) {
        // console.error('=== SIGNIN ERROR ===');
        // console.error('Error type:', error.name);
        // console.error('Error message:', error.message);
        // console.error('Error stack:', error.stack);

        return NextResponse.json(
            {
                success: false,
                error: "Internal server error",
                message: "Something went wrong. Please try again later."
            },
            { status: 500 }
        );
    }
}