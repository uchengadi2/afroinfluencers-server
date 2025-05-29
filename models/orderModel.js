const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    cartId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
    },
    transactionId: {
      type: mongoose.Schema.ObjectId,
      ref: "Transaction",
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
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: "Creator",
    },
     platforms: [
      {
        type: String,
        enum:["facebook","instagram","twitter","tiktok","linkedin","blog"]
      },
    ],
   
       
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },  
    
    
    contractProcessingFee: {
      type: Number,
      default:0,
    },
   
    
    dateAddedToCart: {
      type: Date,
    },

    dateOrdered: {
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
      default: "creative-pending",
      enum: [
        "creative-pending",
        "creative-in-review",
        "creative-completed",
        "marked-for-payment", 
        "project-completed",
        ],
    },
    rejectionReason: {
      type: String,
      trim: true,
    },
       
      
   slug: {
      type: String,
      default: null,
    },
    
    brand: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Brand",
      },
    ],
        
    
    project: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Project",
      },
    ],
    
    image:{
      type:String
    },
    agencyServicePlan:{
      type:String,
      enum:["bronze","gold","platinum"]
    }, 
    // cumulativeAgencyServiceFee:{
    //   type:Number,
    //   default:0
    // },
 

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

    facebookProfileLink:{
      type:String,
      default:null
    },
    instagramProfileLink:{
      type:String,
      default:null
    },
    twitterProfileLink:{
      type:String,
      default:null
    },
    tiktokProfileLink:{
      type:String,
      default:null
    },
   linkedInProfileLink:{
      type:String,
      default:null
    },
    blogSiteLink:{
      type:String,
      default:null
    },
    facebookTotalFollowers:{
      type:Number,
      default:0
    },

    instagramTotalFollowers:{
      type:Number,
      default:0
    },
    twitterTotalFollowers:{
      type:Number,
      default:0
    },
    tiktokTotalFollowers:{
      type:Number,
      default:0
    },
    linkedInTotalFollowers:{
      type:Number,
      default:0
    },
    blogTotalVisitorsPerMonth:{
      type:Number,
      default:0
    },
    facebookEngagementRate:{
      type:Number,
      default:0
    },
    instagramEngagementRate:{
      type:Number,
      default:0
    },
    twitterEngagementRate:{
      type:Number,
      default:0
    },
   tiktokEngagementRate:{
      type:Number,
      default:0
    },
    linkedInEngagementRate:{
      type:Number,
      default:0
    },
     facebookCostPerPost:{
      type:Number,
      default:0
    },
    instagramCostPerPost:{
      type:Number,
      default:0
    },
    twitterCostPerPost:{
      type:Number,
      default:0
    },
    tiktokCostPerPost:{
      type:Number,
      default:0
    },
    linkedInCostPerPost:{
      type:Number,
      default:0
    },
    blogCostPerPost:{
      type:Number,
      default:0
    },
    blogPostCostDuration:{
      type:String,
      enum:["daily","weekly","bi-weekly","monthly"]
    },
    facebookCategory:{    
      type:String,
      default:null
    },
    instagramCategory:{    
      type:String,
      default:null
    },  
    twitterCategory:{    
      type:String,
      default:null
    },
    tiktokCategory:{    
      type:String,
      default:null
    },
    linkedInCategory:{    
      type:String,
      default:null
    },
    blogCategory:{    
      type:String,
      default:null
    },

    markForCompletionBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    markForPaymentBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    markForCompletionDate: {
      type: Date,
    },
    markForPaymentDate: {
      type: Date,
    },
    markedByIdentity: {
      type: String,
      enum: ["staff", "brand"],
    },
   
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "brand",
  });
  next();
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "project",
  });
  next();
});



orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "currency",
  });
  next();
});


orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "transactionId",
  });
  next();
});
orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "creator",
  });
  next();
});


orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "markForCompletionBy",
  });
  next();
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "markForPaymentBy",
  });
  next();
});



const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
