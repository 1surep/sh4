import connectDB from "@/lib/mongodb";
import contactModel from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { hashhandle, email, subject, message } = await req.json();

  await connectDB();

  try {
    await contactModel.create({ hashhandle, email, subject, message });
    return NextResponse.json({ message: "Message Sent Successfully. ON ON 👣🍺" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Message", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const messages = await contactModel.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch messages", error }, { status: 500 });
  }
}