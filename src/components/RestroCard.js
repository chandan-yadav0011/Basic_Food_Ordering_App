import { useContext } from "react";
import { IMG_CDN_LINK } from "../config";
import UserContext from "../utils/UserContext";

const imgURL= IMG_CDN_LINK;


const RestroCard =({name,cuisines,avgRating,locality,cloudinaryImageId,sla})=>{
   
    const {user}=useContext(UserContext);

     return(
        <div className="p-3 m-3 w-52 bg-amber-300 shadow-2xl">
            <img src={imgURL+cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines[0]}</h3>
            <h4>{avgRating}</h4>
            <h4>{locality}</h4>
            <h4>{sla.lastMileTravelString}</h4>
            {/* <h4 className="font-bold">{user.name}</h4>
            <h4 className="font-bold">{user.email}</h4> */}
        </div>
    );
}

export default RestroCard;