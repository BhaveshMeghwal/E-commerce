import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authroutes.js"
import categoryRoutes from "./routes/categoryroutes.js"
import productRoutes from "./routes/productRoutes.js"
// const server = http.createServer(app)

const app = express();

//configure env
dotenv.config();

//database config
connectDB();

app.use(express.json());

//middlewares
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product",productRoutes)

app.get("/",(req,res) =>{
    res.send({
        message:"Welcome to the page"
    })
})

//PORT
const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log("Server is connected",PORT)
})
// export express = require(express)
// 