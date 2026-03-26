import express from "express"
import { googleAuth, logout } from "../controllers/auth.controllers.js"

const authRouter = express.Router()

authRouter.post("/google", isAuthenticate, googleAuth)
authRouter.get("/logout", isAuthenticate, logout)

export default authRouter