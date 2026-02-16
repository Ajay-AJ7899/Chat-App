import express from "express"
import { getCurrentUser } from "../controllers/user.controllers.js"
import isAuth from "../middlewares/isAuth.js"
const userRouter = express.Router()

userRouter.get("/current", isAuth, getCurrentUser)
userRouter.post("/profile", isAuth, upload.single("image"), editProfile)
export default userRouter
