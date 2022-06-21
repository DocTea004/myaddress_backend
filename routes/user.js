import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";


const userRouter = express.Router();

userRouter.post(
    "/register",
    async(req,res)=>{
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password:CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            )
            .toString()
        });

        try{
            const user = await newUser.save();
            res.status(201).json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
)

userRouter.post(
    "/login",
    async(req,res)=>{
        try{
            const user = await User.findOne({
                email:req.body.email
            });
            !user && res.status(401).json("Wrong password or username");

            const bytes = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET_KEY
            );

            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            const accessToken = jwt.sign({
                id: user._id,
            },
            process.env.SECRET_KEY,
            {expiresIn: "5d"}
            )

            originalPassword !== req.body.password && 
                res.status(401).json("Wrong password or username");

            const {password, ...info} = user._doc;

            res.status(200).json({
                ...info,
                accessToken
            });
        }
        catch(err){
            res.status(500).json(err);
        }
    }
)

export default userRouter;