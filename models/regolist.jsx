import mongoose from "mongoose";

const regolistSchema = new mongoose.Schema(
  {
    hashhandle: {
      type: String,
      required: true,
      trim: true,
    },
    kennel: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    shirt: {
      type: String,
      required: true,
      trim: true,
    },
    run: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const RegolistModel = mongoose.models.regolist || mongoose.model("regolist", regolistSchema);

export default RegolistModel;