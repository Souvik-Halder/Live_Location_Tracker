const LocationTrackerModel = require("../models/locationModel");


exports.updateLocation=async(req,res,next)=>{
    const {userId,latitude,longitude}=req.body;
  
  const getLocation=await LocationTrackerModel.find({userId:userId});
  console.log(getLocation);
    if(getLocation.length!==0){
        const updateLocation=await LocationTrackerModel.updateOne({userId:userId},{$set:{latitude:latitude,longitude:longitude}});
        if(updateLocation){
            res.status(200).json({message:"Location updated successfully",updatedLocation:updateLocation});
        }else{
            res.status(400).json({message:"Location not updated"});
        }
    }
    else{
        const location=new LocationTrackerModel({
        
            latitude:latitude,
            longitude:longitude
        });
        const saveLocation=await location.save();
        if(saveLocation){
            res.status(200).json({message:"Location saved successfully"});
        }else{
            res.status(400).json({message:"Location not saved"});
        }
    }
}

//To get all the locations 
exports.getAllLocations=async(req,res)=>{
    const {userId}=req.body;
    try{
        const locations=await LocationTrackerModel.find({userId:userId});
 
        res.status(200).json({locations});
    }catch(err){
        res.status(400).json({message:"Error occured"});
    }
}