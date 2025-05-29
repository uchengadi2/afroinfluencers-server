const mongoose = require("mongoose");
const validator = require("validator");

const transactionSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },


    totalLocalContractProcessingFee: {
      type: Number,
      default:0,
      
    },
    
    totalInternationalContractProcessingFee: {
      type: Number,
      default:0,
    },    

    transactionDate: {
      type: Date,
      default: Date.now,
    },
    orderedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    paymentStatus: {
      type: String,
      enum: ["to-be-confirmed", "paid", "not-processed"],
      default: "to-be-confirmed",
    },
    paymentMethod: {
      type: String,
      default: "audit",
      enum: ["audit", "card", "foreigner"],
    },
    status: {
      type: String,
      default: "unprocessed",
      enum: [
        "unprocessed",
        "pocessed",
        "rejected",
        "fullfilled",
      ],
    },
    rejectionReason: {
      type: String,
      trim: true,
    },
     rejectedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
    },  
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
    },
    totalNumberOfInfluencers: {
      type: Number,
      default: 0,
    },  
    recipientName: {
      type: String,
      required: false,
    },
    recipientPhoneNumber: {
      type: String,
      required: false,
    },
    recipientEmailAddress: {
      type: String,
      required: false,
      validate: [validator.isEmail, "Please provide a valid email"],
    },

    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
