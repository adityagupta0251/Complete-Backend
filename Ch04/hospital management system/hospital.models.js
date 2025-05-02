import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number, // total number of beds
        required: true,
    },
    departments: {
        type: [String], // e.g., ['Cardiology', 'Neurology']
        default: [],
    },
}, { timestamps: true });

export const hospitalRecord = mongoose.model("hospitalRecord", hospitalSchema);
