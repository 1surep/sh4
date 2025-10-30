import connectDB from "@/lib/mongodb";
import RegolistModel from "@/models/regolist";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { hashhandle, kennel, country, shirt, run } = await req.json();
    if (!hashhandle || !kennel || !country || !shirt || !run) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    await connectDB();
    const updated = await RegolistModel.findByIdAndUpdate(
      id,
      { hashhandle, kennel, country, shirt, run },
      { new: true }
    );
    if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Updated successfully", item: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const deleted = await RegolistModel.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}


