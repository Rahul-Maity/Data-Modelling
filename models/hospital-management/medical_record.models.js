import mongoose from "mongoose";

const medicalRecordSchema=new mongoose.Schema({
    patientname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    associatedDoctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    billAmount:{
        type:Number,
        required:true
    }
},{timestamps:true});

export const MedicalRecord=mongoose.model("MedicalRecord",medicalRecordSchema);