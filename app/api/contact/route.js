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
