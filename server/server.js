const express=require('express')
const app=express();
require('dotenv').config({path:'./config/config.env'});
const connectDB=require('./config/dataBase');
const cors=require('cors');
const corsoptions={
    origin:'http://localhost:5173',
    optionsSuccessStatus:200
}

app.use(cors(corsoptions));

connectDB(); 
app.use(express.json());



const locationRoutes=require('./routes/locationRoutes');

app.use('/api',locationRoutes);

app.listen(4000,(err)=>{
    console.log('Server is running on port 4000');
})