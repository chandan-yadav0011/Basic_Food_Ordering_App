import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";


export const  Title =()=> {
    return (
        <Link to="/">
        <img 
            className="h-28 p-1"
            alt="Logo"
            src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"></img>
        </Link>  
    )
};


export const Header =()=>{


    const [login, setLogin]=useState(false);

    const authenticateUser=()=>{

        return true;
    };


    // Subscribing to the store
    // const cartItems = useSelector((store)=>{
    //    return store.cart.items
    // });

    const cartItems = useSelector((store)=>store.cart.items);

   
    
    return (
        <div className="flex justify-between bg-[#d43684] font-normal text-lg  text-white shadow-2xl  md:bg-[#d43684] sm:bg-blue-400">
           <Title/>
           <div>
                <ul className="flex py-10.5">
                    <li className="px-3 "><Link to = "/">Home</Link></li>
                    <li className="px-3"><Link to ="/about">About</Link></li>
                    <li className="px-3"><Link to ="/contact">Contact</Link></li>
                    <li className="px-3"><Link to = "/instamart">Instamart</Link></li>
                    <li className="px-3"><Link to ="/cart">Cart - {cartItems.length} items</Link></li>
                </ul>
           </div>
           <div className="p-10.5">
           {
                (login==false)?(<button onClick={()=>{setLogin(true)}}>Login</button>):<button onClick={()=>{setLogin(false)}}>Logout</button>
           }
           </div>
           
           
             
        </div>
    );
}