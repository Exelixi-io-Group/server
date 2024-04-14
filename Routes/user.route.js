import express from "express"
import {postUser,getAllUsers} from "../Controller/User.controller.js"
const userRoute = express.Router()

userRoute.post("/userDetails", postUser ) ;
userRoute.get("/userList", getAllUsers)

export default userRoute
