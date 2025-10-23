import { NextResponse } from "next/server";

export const validateAuthFields = (requiredFields) => {
  return async (request) => {
    try {
      const body = await request.json();
      
      // Check for missing fields
      const missingFields = requiredFields.filter(field => !body[field]);
      
      if (missingFields.length > 0) {
        return {
          error: true,
          response: NextResponse.json(
            {
              success: false,
              error: "All fields are required",
              message: `Please provide: ${missingFields.join(', ')}`
            },
            { status: 400 }
          )
        };
      }
      
      return {
        error: false,
        body
      };
    } catch (error) {
      return {
        error: true,
        response: NextResponse.json(
          {
            success: false,
            error: "Invalid request",
            message: "Invalid JSON data"
          },
          { status: 400 }
        )
      };
    }
  };
};