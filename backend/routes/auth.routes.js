import express from "express"
import { signUp, login, logOut } from "../controllers/auth.controllers.js"
const authRouter = express.Router()

authRouter.post("/signup",signUp) // to get the frontend deatails we use this post request 
authRouter.post("/login",login)
authRouter.get("/logout",logOut)

export default authRouter
