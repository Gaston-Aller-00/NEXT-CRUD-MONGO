import mongoose from "mongoose";

//create Schema
const studentSchema = new mongoose.Schema(
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

export const StudentModel =
  mongoose?.models?.Student || mongoose.model("Student", studentSchema);
