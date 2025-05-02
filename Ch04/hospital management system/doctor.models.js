import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number, // in years
        required: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    affiliatedHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospitalRecord", // assuming the same hospital reference as in patient model
    }
}, { timestamps: true });

export const doctorModel = mongoose.model("doctorModel", doctorSchema);
