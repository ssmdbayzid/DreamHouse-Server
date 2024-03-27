const express = require("express")
const app = express()
const port = 5000
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const propertyRouter = require("./Routes/PropertiesRoute")
const authRouter = require("./Routes/authRouter")



// ---  Middleware ----------

const corsOptions = {
    origin: "*",
    credential : true,
    optionSuccessStatus : 200
}
app.use(express.json())
app.use(cors(corsOptions))
app.use(bodyParser.json())

// --------- Database Connection --------------

const connectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log("Database connected")
    } catch (error) {
        console.log(error.message, "Database connection failed")
    }
}
connectDatabase().catch(err=> console.log(err.message))

// --------- Router --------------
app.use("/api/v1/properties", propertyRouter)
app.use("/api/v1/auth", authRouter)


// ---------- Home Route ------------
app.get("/", (req, res)=>{
    return res.send("Dream House Server Running")
})



app.listen(port, ()=>{
    console.log(`Server running with ${port}`)
})


// User 
// dream-house


// Password
// yUApj5On7Zq9m3Yy