import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
      );

      const resMenu = await data.json();
      setMenuInfo(resMenu);
    } catch (error) {
      console.error("Getting Error during fetching the restaurant menu info.", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (menuInfo === null) return <ShimmerMenu />;

  const { name, costForTwoMessage, cuisines, avgRating, sla } =
    menuInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(
    "itemcards",
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card
  );
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{sla?.deliveryTime} min</p>

      {/* menu list */}
      <div>
        <h2>Menu</h2>

        {/* // TODO: MenuCard component  */}
        <ul>
          {itemCards &&
            itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info.name} - Rs:
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
