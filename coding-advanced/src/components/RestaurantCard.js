import { IMAGE_ASSEST_CDN_URL } from "../utils/constant";
// import React, { useContext } from "react";
// import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData;

// const {logedInUser } = useContext(UserContext)

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
        {/* <p>
          <strong>User:</strong> {logedInUser}
        </p> */}
      </section>
    </article>
  );
};

export default RestaurantCard;

// Higher order component {takes component and return the enhancement version or any feature using the input component and return another Component.}

export const isVegReastaurant = (Restaurant)=>{
  return (props)=>{

    return(
      <div className="relative">
      <label className="absolute bg-[#080808] opacity-80 rounded-sm text-white px-2 py-0.5 left-4">Veg</label>
      <RestaurantCard {...props} />
      </div>
    )
  }
}