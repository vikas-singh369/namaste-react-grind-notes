import { useContext, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantCard, { isVegReastaurant } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData"

const Body = () => {
  const {
    list,
    setList,
    filtervalue,
    setFiltervalue
  } = useRestaurantData();

  const [searchText, setSearchText] = useState("");
  const VegReastaurantCard = isVegReastaurant(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  // if user offline then { this data i get using my custom hook}
  if (!onlineStatus) {
    return (
      <div className="text-center">
        <h1 className="3xl underline">Tu offline chala gya bhai thoda check kar network kya huwa</h1>
      </div>
    );
  }


  const {logedInUser, setUserName} = useContext(UserContext);

  // conditional rendering
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-[#FFFFFF]">
      <div className="flex items-center justify-evenly w-6/12 mx-auto">
        <div className="flex items-center justify-center">
          <input
            type="text"
            data-testid = "serach-btn"
            className="m-1 p-1 border-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />{" "}
          <button
            className="px-2 py-1 bg-amber-100 rounded-lg"
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
          className="px-2 py-1 bg-amber-100 rounded-lg"
          onClick={() => {
            const filterList = list.filter((res) => res.info.avgRating > 4.2);
            setFiltervalue(filterList);
          }}
        >
          top rated restaurant
        </button>

        <div className="m-0.5 p-0.5">
          <label>User-Name : </label>
          <input className="px-2 py-1 border-1 border-black shadow-amber-200" placeholder="Change user-name"
         value={logedInUser}
          onChange={(e)=> setUserName(e.target.value)}>

          </input>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {filtervalue.map((res) => (
          <Link
            key={res?.info?.id}
            to={`/restaurant/${res?.info?.id}`}
            className="res-list"
            data-testid="card-items"
          >
            {res?.info?.veg ? (
              <VegReastaurantCard resData={res?.info} />
            ) : (
              <RestaurantCard resData={res?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
