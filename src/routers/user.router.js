import { Router } from "express";
import {
  registerUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/all-users").get(getAllUsers); // make sure api endpoints not to conflict
userRouter.route("/:id").get(getUser);
export { userRouter };
