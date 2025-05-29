const mongoose = require("mongoose");

const policySchema = new mongoose.Schema(
  {
    
        
    platformRate:{
      type:Number
    },
    minimumPlatformCharge:{
      type:Number
    },
    vat:{
      type:Number
    },
    platformRateIsIncludedAsPartOfUserInputedAmount:{
      type:Boolean,
      default:true,
      enum:[false, true]
    },
    vatIsIncludedAsPartOfUserInputedAmount:{
      type:Boolean,
      default:true,
      enum:[false, true]
    },
    contractProcessingFeeForLocals:{
      type:Number,
      default:0
    },
    contractProcessingFeeForNonLocals:{
      type:Number,
      default:0
    },
    platinumServicePlanRate:{
      type:Number,
      default:0
    },
    goldServicePlanRate:{
      type:Number,
      default:0
    },
    bronzeServicePlanRate:{
      type:Number,
      default:0
    },
    celebrityInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    megaInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    macroInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    microInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    nanoInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    subNanoInfluencerRecruitmentFee:{
      type:Number,
      default:0
    },
    

  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
