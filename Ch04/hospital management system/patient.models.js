import mongoose from "mongoose";

const patientSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    diagnoswith:{
        type: String,
        required: true,

    },
    address:{
        type: String,
        required: true,

    },
    age:{
        type: Number,
        required: true,

    },
    bloodGroup:{
        type: String,
        required: true,


    },
    gender:{
        type: String,
        enum: ["M", "F","O"],
        required: true,


    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospitalRecord",
    },
    

}, {timpestamps: true});

export const patientmodel = mongoose.model("patientmode", patientSchema);
