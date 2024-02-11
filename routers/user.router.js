import { Router } from "express";
import { registerUser, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/get-user").get(getUser);
export { userRouter };
