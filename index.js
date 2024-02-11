import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import app from "./app.js";

dotenv.config({ path: "/.env" });

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => console.log(`Server is running on ${port}`));
