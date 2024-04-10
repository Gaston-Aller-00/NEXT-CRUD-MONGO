import mongoose from "mongoose";


interface IStudent extends Document {
  name: string;
  age: number;
}


//create Schema
const studentSchema = new mongoose.Schema<IStudent>(
  {
    name: {
      type: String,
      required: [true, "Please complete the field"],
    },
    age: {
      type: Number,
      required: [true, "Please complete the field"],
    },
  },
  { timestamps: true, versionKey: false }
);

//create model a partir del schema

const StudentModel =
  mongoose?.models?.Student || mongoose.model<IStudent>("Student", studentSchema);


  export {StudentModel,IStudent}