import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer= ()=>{

    const {user}= useContext(UserContext);
    
    return ( 
        <div>
            <h4 className="flex justify-center py-10">This site is developed with ♥️ by {user.name} - {user.email}</h4>
        </div>
    );
}


export default Footer;