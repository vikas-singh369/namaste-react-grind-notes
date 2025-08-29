import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../redux/slices/cartSlice";


const Cart = ()=>{
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="w-6/12 mx-auto text-center">
      <div className="flex justify-center items-center gap-3 m-0.5 p-0.5">
        <h1 className="m-2 p-2 font-bold text-xl">Cart</h1>
        <button 
        onClick={handleClearCart}
        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-1.5 px-4 rounded cursor-pointer"
        >Clear-Cart</button>
      </div>
      

      <ItemList itemDataList ={cartItems} />
    </div>
  )
}

export default Cart