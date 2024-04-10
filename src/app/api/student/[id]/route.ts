import connectDB from "@/lib/dbConnect";
import { StudentModel } from "@/models/Student";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findById(id);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, status: 500 });
  }
};
export const DELETE = async  (req: any, { params }: any) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID: ${id} not found ` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, status: 500 });
  }
};
export const PUT = async (req: any, { params }: any) => {
  await connectDB();
  const id = params.id;
  const body = await req.json()
  try {
    const result = await StudentModel.findByIdAndUpdate(id,{$set:{...body}},{new:true});
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, status: 500 });
  }
};
