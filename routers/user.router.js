import { Router } from "express";
import {
  registerUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/get-user").get(getUser);
userRouter.route("/all-users").get(getAllUsers);
export { userRouter };
