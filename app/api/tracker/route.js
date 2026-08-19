import { NextResponse } from "next/server";
import { getAuth, unauthorized } from "@/lib/requireAuth";
import connectMongoDB from "@/lib/mongodb";
import Tracker from "@/models/Tracker";

export async function POST(request) {
  // Admin only
  if (!getAuth(request)) return unauthorized();

  const { hashhandle, givenname, surname, gender, number, email } = await request.json();

  try {
    await connectMongoDB();
    await Tracker.create({ hashhandle, givenname, surname, gender, number, email });
    return NextResponse.json({ message: "Tracker entry created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating tracker entry:", error);
    return NextResponse.json({ message: "Failed to create tracker entry", error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  // Admin only
  if (!getAuth(request)) return unauthorized();

  try {
    await connectMongoDB();
    const trackers = await Tracker.find();
    return NextResponse.json(trackers, { status: 200 });
  } catch (error) {
    console.error("Error fetching tracker entries:", error);
    return NextResponse.json({ message: "Failed to fetch tracker entries", error: error.message }, { status: 500 });
  }
}