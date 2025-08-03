import { useEffect, useState } from "react";
import {MENU_API} from '../utils/constant'

const useRestaurantMenu = (resId) =>{
  const [menuInfo, setMenuInfo] = useState(null);
  // fetching data
  const fetchData = async()=>{
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setMenuInfo(json);
    } catch (error) {
      console.error("Getting Error during fetching the restaurant menu info.", error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return menuInfo
}


export default useRestaurantMenu;