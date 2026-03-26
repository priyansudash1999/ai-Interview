import express from "express"
import isAuthenticate from "../middlewares/isAuthenticate.js"
import { getCurrentUser } from "../controllers/user.controllers.js"


const userRouter = express.Router()

userRouter.get("/current-user", isAuthenticate, getCurrentUser)

export default userRouter