import mongoose  from "mongoose";



mongoose.set("strictQuery",false)

const connectDB = async ( ): Promise<void> => {
     await mongoose.connect(process.env.MONGO_URI)
}

export default connectDB