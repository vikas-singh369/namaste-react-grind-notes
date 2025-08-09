import { useParams } from "react-router";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CaregoryItem from "./CategororyItem";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // custom hook
  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <ShimmerMenu />;

  // console.log("menu info", menuInfo?.data?.cards[2]?.card?.card?.info);

  const { name, cuisines, avgRating, costForTwoMessage } =
    menuInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCards);

  // ?.cards[2]?.card?.card
  return (
    <section className="text-center w-6/12 mx-auto my-2">
      {/* restaurant name rating and cusions section */}
      <div className="shadow border-2 border-amber-200 bg-gray-900 text-white rounded-lg">
        <h1 className="font-bold text-lg m-2 p-2">{name}</h1>
        <div className="flex items-center justify-center ">
          <span className="m-0.5 p-0.5">⭐ {avgRating} </span>
          <span className="m-0.5 p-0.5"> - {costForTwoMessage}</span>
        </div>
        <p className="text-amber-400">{cuisines.join(",")}</p>
      </div>

      {/* show all the title section */}
      <div className="flex flex-col justify-center gap-2.5">
        {itemCards.map((item) => (
          <CaregoryItem key={item.card.card.categoryId} data={item.card.card} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
