import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
  const [onlineStatus, setOnlineStatus] = useState(true);

  // handle online and offline
  const handleOnline = ()=> setOnlineStatus(true);
  const handleOffline = ()=> setOnlineStatus(false);


  useEffect(()=>{
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return ()=>{
      window.removeEventListener("offline" , handleOffline);
      window.removeEventListener("online", handleOnline);
    }
  },[]);

  // boolean 
  return onlineStatus
}


export default useOnlineStatus;