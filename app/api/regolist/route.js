import connectDB from "@/lib/mongodb";
import RegolistModel from "@/models/regolist";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { hashhandle, kennel, country, shirt, run, payment } = await req.json();

    if (!hashhandle || !kennel || !country || !shirt || !run) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    await RegolistModel.create({ hashhandle, kennel, country, shirt, run, payment: payment || "Not Paid" });

    return NextResponse.json(
      { message: "Hasher added to PAN 2027 Rego List" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    // Change sort to createdAt: 1 for ascending (oldest-first)
    // Explicitly select all fields including payment and _id
    const items = await RegolistModel.find({})
      .select('_id hashhandle kennel country shirt run payment createdAt updatedAt')
      .sort({ createdAt: 1 })
      .lean();
    
    // Ensure payment field exists for all items (for backward compatibility)
    const itemsWithPayment = items.map(item => ({
      ...item,
      payment: item.payment || "Not Paid"
    }));
    
    return NextResponse.json(itemsWithPayment, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { message: "Failed to fetch", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}
