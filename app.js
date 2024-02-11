import express from "express";
import { userRouter } from "./routers/user.router.js";

const app = express();

app.use(express.json({ limit: "16kb" }));

app.use("/api/v1/users", userRouter);

export default app;
