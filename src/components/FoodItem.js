import React from 'react'
import { IMG_CDN_LINK } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import {removeItem } from "../utils/cartSlice"

const FoodItem = ({imageId,name,itemAttribute,ratings,description,price}) => {

  const imgURL = IMG_CDN_LINK;

  //const cartItems = useSelector(store=>store.cart.items);
  const dispatch = useDispatch();

  const handelRemove=(cartItems)=>{
      dispatch(removeItem());
  }

  return (
  
    <div className="p-3 m-3 w-52 bg-amber-300 shadow-2xl">
            <img src={imgURL+imageId}/>
            <h2 className="font-bold">{name}</h2>
            <h3>{description}</h3>
            <h4>{itemAttribute.vegClassifier}</h4>
            <h4 className='font-bold'>Price: {price}</h4>
            <h4>{ratings.aggregatedRating.rating}</h4>
            
            <button className='p-2 m-2 bg-[#09ad09] hover:bg-amber-900 rounded-md text-white'
                    onClick={()=>handelRemove()}>Remove item</button>
            {/* <h4 className="font-bold">{user.name}</h4>
            <h4 className="font-bold">{user.email}</h4> */}
    </div>
  
  )
}

export default FoodItem