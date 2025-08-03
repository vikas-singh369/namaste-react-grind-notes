import { useParams } from "react-router";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  // custom hook 
  const menuInfo = useRestaurantMenu(resId)

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
