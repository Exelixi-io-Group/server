import express from "express"
import {user} from "../Controller/User.controller.js"
const userRoute = express.Router()

userRoute.post("/userDetails", user ) 

export default userRoute
