import { FOOD_API } from "../utils/constant";
import localData from "../utils/swiggyData.json";
import { useState, useEffect } from "react";
import useOnlineStatus from "./useOnlineStatus";

const useRestaurantData = () => {
  const [list, setList] = useState([]);
  const [filtervalue, setFiltervalue] = useState([]);
  const onlineStatus = useOnlineStatus();

  // fetching data
  const fetchData = async () => {
    try {
      const fetchResData = await fetch(FOOD_API);
      const json = await fetchResData.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setList(restaurants);
      setFiltervalue(restaurants);
    } catch (error) {
      console.warn("API failed, using local JSON data instead");
      if (onlineStatus) {
        const fallbackRestaurants =
          localData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
            
        setList(fallbackRestaurants);
        setFiltervalue(fallbackRestaurants);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    list,
    filtervalue,
    setList,
    setFiltervalue,
  };
};

export default useRestaurantData;
