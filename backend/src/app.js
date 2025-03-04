import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
import commonPostRouter from "./routes/posts.routes.js"
import communityRouter from "./routes/community.routes.js"

app.use("/api/v1",userRouter)
app.use("/api/v1/commonPosts",commonPostRouter)
app.use("/api/v1/community",communityRouter)


export {app}