import {IMAGE_ASSEST_CDN_URL }  from "../utils/constant"
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } = resData;

  return (
<article className="card">
  <img
    className="card-img"
    alt={name ? `${name} image` : "Restaurant image"}
    src={`${IMAGE_ASSEST_CDN_URL}${cloudinaryImageId}`}
  />
  <section className="card-content">
    <h3>{name || "Unnamed Restaurant"}</h3>
    <p><strong>Rating:</strong> {avgRating ?? "N/A"}</p>
    <p><strong>Cost for Two:</strong> {costForTwo ?? "Unknown"}</p>
    <p><strong>Delivery Time:</strong> {sla?.deliveryTime ?? "--"} min</p>
    <p><strong>Cuisines:</strong> {cuisines?.join(", ") || "Unlisted"}</p>
  </section>
</article>

  );
};

export default RestaurantCard;
