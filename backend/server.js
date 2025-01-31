import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import dbCon from "./utils/db.js"
import routers from "./routes/routes.js"
dotenv.config()
const app = express()


dbCon()
app.use(express.json())
app.use(cors())
app.use('/api',routers)

app.listen(process.env.PORT , ()=>{
    console.log("server is running")
})