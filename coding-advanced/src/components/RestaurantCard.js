const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo,cloudinaryImageId
 } = resData;

  return (
    <div className="card">
      <img
        className="card-img"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/flkrqw93czpwolppunn4"
      />

      <div className="card-details">
        <h2>{name}</h2>
        <h3>{avgRating}</h3>
        <p>{costForTwo}</p>
        <p>45-50 min</p>
        <p>{cuisines.join(" ,")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
