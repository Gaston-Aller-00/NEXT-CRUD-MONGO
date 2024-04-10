import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel, IStudent } from '@/models/Student';
import {NextApiRequest} from "next"
export const POST = async (req: NextApiRequest) => {
  await connectDB();
  try {
    const body = req.body; 
    const newStudent = await StudentModel.create(body);
    return NextResponse.json({ data: newStudent, status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, status: 500 });
  }
};

export const GET = async () => {
  await connectDB();
  try {
    const result: IStudent[] = await StudentModel.find({});
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, status: 500 });
  }
};
