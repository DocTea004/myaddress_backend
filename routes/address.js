import express from "express";
import Address from "../models/Address.js";

const addressRouter = express.Router();


addressRouter.post(
    "/register",
    async(req,res)=>{
        const newAddress = new Address({
            CompanyName: req.body.CompanyName,
            LocationName: req.body.LocationName,
            ZipCode : req.body.ZipCode,
            PhoneNumber : req.body.PhoneNumber,
            Email : req.body.Email,
            Country : req.body.Country,
            RegionState : req.body.RegionState,
            TownVillage : req.body.TownVillage,
            CompanyAddress : req.body.CompanyAddress,
            LandMark : req.body.LandMark,
            WebAddress : req.body.WebAddress,
            ListingCategory : req.body.ListingCategory,
            //Logo : req.body.Logo
        });

        try{
            const address = await newAddress.save();
            res.status(201).json(address);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
);

addressRouter.get(
    "/",
    async(req,res)=>{
        try{
            const address = await Address.find({});
            res.status(200).json(address);
        }
        catch(err){
            //console.log(err);
            res.status(500).json(erer);
        }
    }
)



export default addressRouter;