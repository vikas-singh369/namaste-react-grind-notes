import { IMAGE_ASSEST_CDN_URL } from "../utils/constant";

const ItemCard = ({ itemData }) => {
  console.log(itemData);
  return (
    <div className="flex border-b-2 border-amber-200">
      <div className="w-9/12 text-left">
        <div className="flex items-center  ">
          <h3 className="m-0.5 p-0.5 font-semibold">{itemData.name}</h3>
          <span className="m-0.5 p-0.5">
            {" "}
            ₹ {itemData.price / 100 || itemData.defaultPrice / 100}
          </span>
        </div>
        <p className="text-gray-500 m-0.5 p-0.5">{itemData.description}</p>
      </div>
      <div className="w-3/12 rounded-lg m-0.5 p-0.5 shadow-lg">
        <img
          src={IMAGE_ASSEST_CDN_URL + itemData.imageId}
          alt={itemData.name}
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ItemCard;
