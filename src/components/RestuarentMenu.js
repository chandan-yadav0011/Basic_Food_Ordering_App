import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_LINK } from "../config";
import { Shimmer } from "./Shimmer";
import { useRestaurent } from "../utils/useRestaurent";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";




const RestuarentMenu=()=>{

    const params = useParams();
    const imgURL= IMG_CDN_LINK;
    
    const res = useRestaurent(params.id);
    
  
   // const fullResData = res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
   // console.log(fullResData);
    
    const dispatch = useDispatch();

    const handelDispatch=()=>{
        dispatch(addItem("Grapes"));
    }

    const handelAddItems=(item)=>{
        dispatch(addItem(item));
    }

    if(!res)
    {
        return null;
    }

    return (
    <>
      <div className="p-4 m-4 flex ">
        <div className="w-56">
            <h1>Resturent with id: {params.id}</h1>
            <h2 className="text-5xl">{res?.data?.cards[2]?.card?.card?.info?.name}</h2>
            <img src={imgURL+res?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} className="py-3"/>
            <h3>{res?.data?.cards[2]?.card?.card?.info?.areaName}</h3>
            <h3>{res?.data?.cards[2]?.card?.card?.info?.city}</h3>
            <h3>{res?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h3>{res?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            
        </div>
        {/* <div>
            <button onClick={()=>handelDispatch()} className="p-2 m-2 bg-[#09ad09] rounded-md text-white">Add item</button>
        </div> */}
        <div className="px-10 py-18">
        <h1 className="text-4xl">Menu</h1>
        <ul className="py-4">
            {
                (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((menu,indx)=>{
                    return <li key={indx}>{menu?.card?.info?.name} - <button onClick={
                            ()=>handelAddItems(menu?.card?.info)
                    } className="p-1 m-1 bg-[#09ad09] rounded-md text-white">Add item</button></li>
                })
            }   
            </ul>
        </div>
        </div>
    </>
    )
}

export default RestuarentMenu;