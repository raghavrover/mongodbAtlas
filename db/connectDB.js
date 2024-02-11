import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no server is selected
        writeConcern: {
          w: "majority",
          j: true, // If you want to wait for the journal commit
        },
      }
    );

    console.log("Connection established successfully");
  } catch (err) {
    console.log("MongoDB Server error", err);
    throw err;
  }
}

export default connectDB;

/** {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no server is selected
        writeConcern: {
          w: "majority",
          j: true, // If you want to wait for the journal commit
        },
      } */
