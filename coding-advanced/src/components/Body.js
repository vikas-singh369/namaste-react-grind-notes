import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import localData from "../utils/swiggyData.json";
import { Link } from "react-router";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtervalue, setFiltervalue] = useState([]);

  const fetchData = async () => {
    try {
      const fetchResData = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await fetchResData.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("restaurant", restaurants);
      setList(restaurants);
      setFiltervalue(restaurants);
    } catch (error) {
      console.warn("API failed, using local JSON data instead");
      const fallbackRestaurants =
        localData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setList(fallbackRestaurants);
      setFiltervalue(fallbackRestaurants);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />{" "}
          <button
            onClick={() => {
              const filtervalue = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltervalue(filtervalue);
            }}
          >
            search
          </button>
        </div>
        <button
          onClick={() => {
            const filterList = list.filter((res) => res.info.avgRating > 4.2);
            setFiltervalue(filterList);
          }}
        >
          top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {filtervalue.map((res) => (
          <Link key={res?.info?.id} to = {`/restaurant/${res?.info?.id}`}  className="res-list">
          <RestaurantCard resData={res?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
