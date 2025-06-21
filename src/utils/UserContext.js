import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Chandan Yadav",
        email:"chandanyadav8145@gmail.com"
    }
})


export default UserContext;