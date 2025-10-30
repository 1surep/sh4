import connectDB from "@/lib/mongodb";
import RegolistModel from "@/models/regolist";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { hashhandle, kennel, country, shirt, run } = await req.json();

    if (!hashhandle || !kennel || !country || !shirt || !run) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    await RegolistModel.create({ hashhandle, kennel, country, shirt, run });

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
    const items = await RegolistModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}
