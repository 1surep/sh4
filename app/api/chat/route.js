import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const {prompt} = await request.json();
        if (!prompt) {
            return NextResponse.json({message: "Prompt is required"}, {status: 400});
        }

        // Read the kennels data file
        const kennelsDataPath = path.join(process.cwd(), 'public', 'kennels_data.txt');
        let kennelsData = '';
        
        try {
            kennelsData = await fs.readFile(kennelsDataPath, 'utf8');
        } catch (error) {
            console.warn('Kennels data file not found, using default context');
            kennelsData = 'Abuja Hash House Harriers - A running club with a drinking problem. We meet every Saturday at 4 PM for hash runs around Abuja.';
        }

        // Construct the full prompt with the kennels data
        const fullPrompt = `You are a helpful assistant for Abuja Hash House Harriers. Please answer the following question based on the provided Hash DB data:\n\n${kennelsData}\n\nUser Question: ${prompt}`;

        // const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({message: text}, {status: 200}); 
    } 
    
    
    catch (error) {
        console.error("Error generating content:", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
        
    }
}