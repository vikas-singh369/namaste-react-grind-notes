import ItemList from "./ItemList";

const CaregoryItem = ({ data, isOpenShowItem, setShowIndex }) => {
  // const[isOpen, setIsOpen] = useState(false)
  // console.log("Category data", data);

  const handleClick = () => {
    console.log(isOpenShowItem)
     setShowIndex();
  };

  return (
    <>
      <div
        className="shadow-lg border-b-amber-200 m-2 p-2 rounded-b-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold  text-lg ">
            {data.title} - {data.itemCards.length}
          </h2>
          <span className="m-0.5 p-0.5">{isOpenShowItem  ? "⬇️" : "⬆️"}</span>
        </div>

        {/* don't render like this change it  */}
          { isOpenShowItem  && <ItemList itemDataList={data.itemCards} />}
      </div>
    </>
  );
};

export default CaregoryItem;
