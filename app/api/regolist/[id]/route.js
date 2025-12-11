import connectDB from "@/lib/mongodb";
import RegolistModel from "@/models/regolist";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { hashhandle, kennel, country, shirt, run, payment } = body;
    
    if (!hashhandle || !kennel || !country || !shirt || !run) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    await connectDB();
    
    // Ensure payment is always set - use explicit value or default
    const paymentValue = payment !== undefined && payment !== null ? payment : "Not Paid";
    
    // Find the document first, then update and save to ensure all fields are persisted
    const item = await RegolistModel.findById(id);
    if (!item) return NextResponse.json({ message: "Not found" }, { status: 404 });
    
    // Update all fields
    item.hashhandle = hashhandle;
    item.kennel = kennel;
    item.country = country;
    item.shirt = shirt;
    item.run = run;
    item.payment = paymentValue;
    
    // Explicitly mark payment as modified to ensure it's saved
    item.markModified('payment');
    
    // Save the document to ensure payment field is persisted
    const updated = await item.save();
    
    // Fetch the document again to ensure we get all fields including payment
    const refreshed = await RegolistModel.findById(id).lean();
    
    // Convert to plain object and explicitly include payment
    const updatedItem = {
      _id: refreshed._id,
      hashhandle: refreshed.hashhandle,
      kennel: refreshed.kennel,
      country: refreshed.country,
      shirt: refreshed.shirt,
      run: refreshed.run,
      payment: refreshed.payment || paymentValue,
      createdAt: refreshed.createdAt,
      updatedAt: refreshed.updatedAt
    };
    
    return NextResponse.json({ message: "Updated successfully", item: updatedItem }, { status: 200 });
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json(
      { message: "Failed to update", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}

export async function DELETE(_req, { params }) {
  try {
    const { id } = await params;
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


