import { useContext, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantCard, { isVegReastaurant } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const { list, setList, filtervalue, setFiltervalue } = useRestaurantData();

  const [searchText, setSearchText] = useState("");
  const VegReastaurantCard = isVegReastaurant(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  // if user offline then { this data i get using my custom hook}
  if (!onlineStatus) {
    return (
      <div className="text-center py-4 my-4">
        <h1 className="text-3xl text-amber-400">
          Tu offline chala gya bhai thoda check kar network kya huwa
        </h1>
      </div>
    );
  }

  const { logedInUser, setUserName } = useContext(UserContext);

  // conditional rendering
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center justify-center space-x-6 m-4">
        <div className="flex items-center justify-center gap-x-3">
          <input
            type="text"
            data-testid="serach-btn"
            className="px-2 py-1 border-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-1.5 px-4 rounded cursor-pointer"
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
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-1.5 px-4 rounded cursor-pointer"
          onClick={() => {
            const filterList = list.filter((res) => res.info.avgRating > 4.2);
            setFiltervalue(filterList);
          }}
        >
          top rated restaurant
        </button>

        <div className="space-x-2">
          <label>User-Name : </label>
          <input
            className="px-2 py-1 border-1 shadow-amber-200"
            placeholder="Change user-name"
            value={logedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
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
    </>
  );
};

export default Body;
