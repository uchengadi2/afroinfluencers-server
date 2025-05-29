const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: "Creator",
    },
    brand:{
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
    },
    agencyServicePlan:{
      type:String,
      enum:["bronze","gold","platinum"]
    },      

    project:{
      type: mongoose.Schema.ObjectId,
      ref: "Project",
    },
 
    creativeLanguage:{
      type: mongoose.Schema.ObjectId,
      ref: "Language",
    },
    
    isDeleted: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    
    refNumber: {
      type: String,
    },
    cartHolder: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateAddedToCart: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      default: "unmarked-for-checkout",
      enum: ["unmarked-for-checkout", "marked-for-checkout", "checkedout"],
    },
    
   
    slug: {
      type: String,
    },
    creatorImage: {
      type: String,
    },

    platforms: [
      {
        type: String,
        enum:["facebook","instagram","twitter","tiktok","linkedin","blog"]
      },
    ],

    facebookPostQuantity: {
      type: Number,
      default: 0,
    },
    instagramPostQuantity: {
      type: Number,
      default: 0,
    },
    twitterPostQuantity: {
      type: Number,
      default: 0,
    },
    tiktokPostQuantity: {
      type: Number,
      default: 0,
    },
    linkedInPostQuantity: {
      type: Number,
      default: 0,
    },
    blogPostQuantity: {
      type: Number,
      default: 0,
    },





    
   
 
    
  },

  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "creator",
  });
  next();
});

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "brand",
  });
  next();
});

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "creativeLanguage",
  });
  next();
});

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "currency",
  });
  next();
});
cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "project",
  });
  next();
});
cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  next();
});


const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
