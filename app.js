import express from "express"
import dotenv from "dotenv"
dotenv.config({path:"./config/config.env"})
import cors from "cors"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
import { connection } from "./database/connection.js"

const app = express()

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST','PUT','GET','DELETE','PATCH'],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:"true"}))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

connection()
export default app