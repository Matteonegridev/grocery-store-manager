import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url).then(() => console.log("database connected"));
  } catch (error) {
    console.log("error connecting database:", error);
  }
};

export default connectDB;
