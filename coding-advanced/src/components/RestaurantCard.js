import { IMAGE_ASSEST_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <article className="w-64 rounded-2xl shadow-md overflow-hidden border">
      <img
        className="w-full h-40 object-cover"
        alt={name ? `${name} image` : "Restaurant image"}
        src={`${IMAGE_ASSEST_CDN_URL}${cloudinaryImageId}`}
      />
      <section className="p-3 space-y-1">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm">
          ⭐ {avgRating} - 🛵 {sla?.deliveryTime} min
        </p>
        <p className="text-sm">Cost for Two: {costForTwo}</p>
        <p className="text-sm text-amber-500 line-clamp-1">
          Cuisines - {cuisines?.join(", ")}
        </p>
      </section>
    </article>
  );
};

export default RestaurantCard;

// Higher order component {takes component and return the enhancement version or any feature using the input component and return another Component.}

export const isVegReastaurant = (Restaurant) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-[#080808] opacity-80 rounded-sm text-white px-2 py-0.5 left-4">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
