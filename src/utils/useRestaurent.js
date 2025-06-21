import { useEffect, useState } from "react";

export const useRestaurent=(resId)=> {
    
    const[res,setRes]= useState(null);
    
    useEffect(()=>{
        getRestroInfo();
    },[]);

    async function getRestroInfo() {
       const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.972009&lng=73.0348229&restaurantId="+resId);
       const jsonData = await data.json();

     //  console.log(jsonData);
       setRes(jsonData);

    }   

    return res;
}