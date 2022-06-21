import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({

    CompanyName:{
        type:String,
        required:true
    },
    LocationName:{
        type:String,
        required:true
    },
    ZipCode:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    RegionState:{
        type:String,
        required:true
    },
    TownVillage:{
        type:String,
        required:true
    },
    CompanyAddress:{
        type:String,
        required:true
    },
    LandMark:{
        type:String,
        required:true
    },
    WebAddress:{
        type:String,
        //required:true
    },
    ListingCategory:{
        type:String,
        required:true
    },
    /*
    Logo:{
        type:String,
        required:true
    }
    */
},{
    timestamps:true
})

export default mongoose.model("Address", AddressSchema);
