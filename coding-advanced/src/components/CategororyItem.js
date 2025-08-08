import ItemCard from "./ItemCard";

const CaregoryItem = ({ data }) => {
  // console.log("Category data", data);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div
        className="shadow-lg border-b-amber-200 m-2 p-2 rounded-b-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className=" flex items-center justify-between">
          <h2 className="font-semibold text-lg ">
            {data.title} - {data.itemCards.length}
          </h2>
          <span>🔽</span>
        </div>

        {/* accordion */}
        <div>
          {data.itemCards.map((item)=> <ItemCard key = {item.card.info.id} itemData = {item.card.info} />)}
        </div>
      </div>
    </>
  );
};

export default CaregoryItem;
