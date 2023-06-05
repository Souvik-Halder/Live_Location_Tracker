const express=require('express');
const router=express.Router();

const {updateLocation,getAllLocations}=require('../controllers/locationController');

router.route('/update-location').post(updateLocation);
router.route('/get-all-locations').post(getAllLocations);

module.exports=router;
