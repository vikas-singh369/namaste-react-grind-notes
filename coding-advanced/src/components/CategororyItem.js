import { useState } from "react";
import ItemCard from "./ItemCard";

const CaregoryItem = ({ data }) => {
  const[isOpen, setIsOpen] = useState(false)
  // console.log("Category data", data);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="shadow-lg border-b-amber-200 m-2 p-2 rounded-b-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg ">
            {data.title} - {data.itemCards.length}
          </h2>
          <span className="m-0.5 p-0.5">{isOpen ? "⬇️" : "⬆️"}</span>
        </div>

        {/* accordion */}
        <div className="flex flex-col justify-center gap-3">
          {data.itemCards.map((item) => ( isOpen ? <ItemCard key={item.card.info.id} itemData={item.card.info} /> : ""))}
        </div>
      </div>
    </>
  );
};

export default CaregoryItem;
