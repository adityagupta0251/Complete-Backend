import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patientmode", // matches your patient model name
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctorModel",
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
    medications: {
        type: [String], // list of medication names
        default: [],
    },
    visitDate: {
        type: Date,
        default: Date.now,
    },
    notes: {
        type: String,
    }
}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
