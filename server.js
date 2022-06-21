import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import addressRouter from "./routes/address.js";



const app = express();
const port = process.env.PORT || 8800;

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        //useCreateIndex:true
    }
)
.then(()=> console.log("Database Connected successfully........"))
.catch((err)=> console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/address",addressRouter)

app.get(
    "/",
    (req,res)=>{
        res.send("Server running perfectly.........");
    }
)


app.listen(
    port,
    ()=>{
        console.log(`Server running on port ${port}`);
    }
)