const mongoose=require('mongoose');

const LocationTrackerSchema=new mongoose.Schema({  
    userId:{
        type:String,
        default:"1"
    },     
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }
});
const LocationTrackerModel=mongoose.model('LocationTracker',LocationTrackerSchema,'location');
module.exports=LocationTrackerModel;