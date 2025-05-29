const mongoose = require("mongoose");

const creatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the creator"],
    },
    bio:{
      type:String,
      default:null,
    },
    
    user: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      ],
   
      currency: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "Currency",
        },
      ],
   
    
        
        age:{
          type:Number
        },
        gender:{
          type:String,
          default:"male",
          enum:["male","female","prefer-not-to-say"]
        },
       
    
    
         country: [
              {
                type: mongoose.Schema.ObjectId,
                ref: "Country",
              },
            ],
        niches: [
              {
                type: mongoose.Schema.ObjectId,
                ref: "Niche",
              },
            ],
        languages: [
              {
                type: mongoose.Schema.ObjectId,
                ref: "Language",
              },
            ],
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    modifiedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],

    
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    dateModified: {
      type: Date,
     
    },
    image: {
        type: String,
        required: [false, "Please provide the image cover"],
      },
  
      images: [
        {
          type: String,
        },
      ],
      slug:{
        type:String,
        default:null
      },
      status:{
        type:String,
        default:"inactive",
        enum:["active","inactive","suspended","dismissed","deleted"]
      },
      creatorContactPhoneNumber:{
        type:String,
        default:null
      },
      creatorContactEmailAddress:{
        type:String,
        default:null
      },
      bankDetails:{
        type:String,
        default:null
      },
       activatedOrDeactivatedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateActivatedOrDeactivated: {
      type: Date,
     
    },
    //  platforms: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Platform",
    //   },
    // ],
    platforms: [
      {
        type: String,
        enum:["facebook","instagram","twitter","tiktok","linkedin","blog"]
      },
    ],
   
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
    
   

     
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
creatorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  next();
});
creatorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
  });
  next();
});

creatorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
  });
  next();
});

creatorSchema.pre(/^find/, function (next) {
    this.populate({
      path: "niches",
    });
    next();
  });

  creatorSchema.pre(/^find/, function (next) {
    this.populate({
      path: "languages",
    });
    next();
  });

  creatorSchema.pre(/^find/, function (next) {
    this.populate({
      path: "currency",
    });
    next();
  });

  

const Creator = mongoose.model("Creator", creatorSchema);
module.exports = Creator;
