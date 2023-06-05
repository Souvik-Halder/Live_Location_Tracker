import React,{useEffect,useState} from 'react'
import axios from 'axios'
const GetLocation = () => {
  const [stop, setStop] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const GetLocation =async () => {

    
    const  {data}=await axios.post('http://localhost:4000/api/get-all-locations', {userId:"1" })
console.log(data.locations[0].latitude)
    setLatitude(data.locations[0].latitude)
    setLongitude(data.locations[0].longitude)
   
};
  useEffect(() => {
   
    // Start the timer when the component mounts
    if(stop) return ()=>clearInterval(interval
      )
    const interval = setInterval(GetLocation, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(interval);
  }, [stop]);



  return (
    latitude && longitude &&
    <div>
     <button onClick={()=>setStop(true)}>Stop Get</button>
        <h1>Latitude:{latitude}</h1>
        <h1>Longitude:{longitude}</h1>
     
    </div>
  )
}

export default GetLocation
