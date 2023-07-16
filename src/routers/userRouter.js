import express from "express";
import { edit, remove, user } from "../controllers/userController.js"

const userRouter = express.Router();


userRouter.get("/", user)
userRouter.get("/edit", edit)
userRouter.get("/remove", remove)

export default userRouter;