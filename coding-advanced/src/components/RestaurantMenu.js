import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{
  const [menuInfo, setMenuInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  const fetchMenu =  async()=>{
    try {
      const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`);

      const resMenu = await data.json();
      console.log(resMenu);
      setMenuInfo(resMenu);
    } catch (error) {
      // TODO: error logs 
    }
  }

  useEffect(()=>{
    fetchMenu();
  },[])
  
  if(menuInfo === null) return <Shimmer />

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    sla
  } = menuInfo?.data?.cards[2]?.card?.card?.info;

  console.log(name);
  console.log( cuisines);


  // error here find and solve it 

  const {
    itemCards
  } = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  console.log("itemcards", menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

  console.log("extract wala",itemCards)
  return (
    <div>
      <h1>{name}</h1>
       <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{sla?.deliveryTime} min</p>
     
     {/* menu list */}
     <div>
      <h2>Menu</h2>
      <ul>
        { itemCards && itemCards.map((item)=> <li key = {item?.card?.info?.id}>{item?.card?.info.name} - Rs:{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>)}
      </ul>
     </div>
      
    </div>
  )
}

export default RestaurantMenu