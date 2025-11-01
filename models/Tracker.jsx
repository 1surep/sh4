
import mongoose from "mongoose";

const trackerSchema = new mongoose.Schema ({

    hashhandle: {
        type: String,
        required: true,
        trim: true,
    },

    givenname: {
        type: String,
        required: true,
        trim: true,
    },

    surname: {
        type: String,
        required: true,
        trim: true,
    },

    gender: {
        type: String,
        required: true,
        trim: true,
    },


    number: {
        type: String,
        required: true,
        trim: true,
    },


    email: {
        type: String,
        required: true,
        trim: true,
    },


 
}, {timestamps: true});

const trackerModel = mongoose.models.tracker || mongoose.model ('tracker', trackerSchema)

export default trackerModel;