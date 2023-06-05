import React,{useEffect,useState} from 'react'
import axios from 'axios'
const LocationTracker = () => {
  const [stop, setStop] = useState(false);
  useEffect(() => {
   
    // Start the timer when the component mounts
    if(stop) return ()=>clearInterval(interval
      )
    const interval = setInterval(sendLocationUpdate, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(interval);
  }, [stop]);
  const sendLocationUpdate =async () => {

    // Get the current location
    navigator.geolocation.getCurrentPosition(async(position) => {
      const { latitude, longitude } = position.coords;
    
      const  {data}=await axios.post('http://localhost:4000/api/update-location', {userId:"1", latitude, longitude })
      console.log(data)
     
    });
  };


  return (
    <div>
     
      <button onClick={sendLocationUpdate}>Click me to get the location</button>
      <button onClick={()=>setStop(true)}>Stop</button>
    </div>
  )
}

export default LocationTracker
