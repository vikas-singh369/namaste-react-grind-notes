import { IMAGE_ASSEST_CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <article className="m-4 p-4 border-1">
      <img
        className="card-img"
        alt={name ? `${name} image` : "Restaurant image"}
        src={`${IMAGE_ASSEST_CDN_URL}${cloudinaryImageId}`}
      />
      <section className="card-content">
        <h3>{name}</h3>
        <p>
          <strong>Rating:</strong> {avgRating}
        </p>
        <p>
          <strong>Cost for Two:</strong> {costForTwo}
        </p>
        <p>
          <strong>Delivery Time:</strong> {sla?.deliveryTime} min
        </p>
        <p>
          <strong>Cuisines:</strong> {cuisines?.join(", ")}
        </p>
      </section>
    </article>
  );
};

export default RestaurantCard;
