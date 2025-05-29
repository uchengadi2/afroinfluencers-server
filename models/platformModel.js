const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: [true, "Please provide the platform"],
    },
    
    description: {
      type: String,
      trim: true,
    },
    
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
   
     
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


const Platform = mongoose.model("Platform", platformSchema);
module.exports = Platform;
