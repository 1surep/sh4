import connectDB from "@/lib/mongodb";
import contactModel from "@/models/Contact";
import { NextResponse } from "next/server";
import { getAuth, unauthorized } from "@/lib/requireAuth";

export async function PATCH(req, { params }) {
  // Admin only
  if (!getAuth(req)) return unauthorized();

  const { id } = params;
  await connectDB();
  try {
    const body = await req.json();
    const { read } = body || {};
    if (typeof read !== 'boolean') {
      return NextResponse.json({ message: 'Invalid payload' }, { status: 400 });
    }
    const updated = await contactModel.findByIdAndUpdate(
      id,
      { $set: { read } },
      { new: true }
    ).lean();
    if (!updated) return NextResponse.json({ message: 'Not found' }, { status: 404 });
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update message', error }, { status: 500 });
  }
}


