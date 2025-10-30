import mongoose from "mongoose";

const contactSchema = new mongoose.Schema ({

    hashhandle: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },

    subject: {
        type: String,
        trim: true,
    },

    message: {
        type: String,
        trim: true,
    },

   
    createdAt: {
        type: Date,
        default: Date.now
    },

    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

const contactModel = mongoose.models.contact || mongoose.model ('contact', contactSchema)

export default contactModel;