import { useDispatch } from "react-redux";
import { IMAGE_ASSEST_CDN_URL } from "../utils/constant"
import { addItem } from "../redux/Slices/cartSlice";




const ItemList = ({ itemDataList }) => {
  
  const dispatch = useDispatch();

  
const addToCartItem = (item)=>{
  dispatch(addItem(item))
}

  return (
    <div className="flex flex-col justify-center gap-3">
      {itemDataList.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;
        const finalPrice = (price || defaultPrice) / 100;

        return (
          <div key={id} className="flex border-b-2 border-amber-200 py-2">
            <div className={`${imageId ? "w-full" : "w-9/12"} text-left`}>
              <div className="flex items-center flex-wrap">
                <h3 className="m-0.5 p-0.5 font-semibold">{name}</h3>
                <span className="m-0.5 p-0.5">₹ {finalPrice}</span>
              </div>
              {description && (
                <p className="text-gray-500 m-0.5 p-0.5">{description}</p>
              )}
            </div>

            {imageId && (
              <div className="w-3/12 rounded-lg m-0.5 p-0.5 shadow-lg">
                <img
                  src={`${IMAGE_ASSEST_CDN_URL}${imageId}`}
                  alt={name}
                  className="object-contain rounded-lg"
                />
              </div>
            )}

            <div>
              <button className="px-2 py-1 bg-amber-200 rounded-lg text-black"
               onClick={() => addToCartItem(item)}>
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
