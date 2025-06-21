import { useDispatch, useSelector } from "react-redux";
import RestroCard from "./RestroCard";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    const cartItems= useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handelClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2"> Items added in cart are...</h1>
            <button 
                onClick={()=>handelClearCart()}
                className="text-xl p-2 m-2 bg-[#09ad09] hover:bg-amber-900 rounded-md text-white ">Clear cart</button>
            <div className="flex flex-wrap">
            {
                cartItems.map((item,indx)=>{
                    return <FoodItem key={indx} {...item}/>
                })
            }
           </div>
        </div>
    )
}

export default Cart;