import dotenv from "dotenv";
import connectDB from "./src/db/connectDB.js";
import app from "./src/app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

const initiateTheServer = async () => {
  try {
    const connection = await connectDB();
    // console.log(connection);
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log("MongoDB Server connection failed", error);
  }
};

initiateTheServer();

// Another way of connecting to DB and initiating the server
/**
connectDB()
  .then((response) => {
    app.listen(port, () => console.log(`Server is running on ${port}`));
  })
  .catch((error) => console.log("MongoDB Server connection failed", error));
 */
