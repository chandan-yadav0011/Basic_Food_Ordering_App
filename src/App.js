import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client"
import {Title,Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import About2, {About} from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestuarentMenu from "./components/RestuarentMenu";
import Profile from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
//import Instamart from "./components/Instamart";
const Instamart = lazy(()=>import("./components/Instamart"));
const About = lazy(()=>import("./components/About"));

const AppLayout= ()=>{

    const [user,setUser]=useState({
        name:"Chandan Yadav",
        email:"chandanyadav8145@gmail.com"
    });

    return (
    
         /**
            Header
                -Logo 
                -Navbar list (rightside)
                -Cart

            Body
                -searchbar
                -RestaurantList
                    -Restrauent Card
                        -img
                        -rating
                        -name and details
                    -
            Footer
                -links 
                -copyright
            
        */
      <Provider store={store}>
            <UserContext.Provider value={
                {
                    user:user,
                    setUser: setUser,

                }
            }>
                <Header/>
                <Outlet/>
                <Footer/>
        </UserContext.Provider>
       </Provider>
         
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>),
                children:[{
                    path:"profile",
                    element:<Profile/>
                }]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restuarent/:id",
                element:<RestuarentMenu/>
            },
            {
                path:"/instamart",
                element:(
                        <Suspense fallback={<Shimmer/>}>
                            <Instamart/>
                        </Suspense>
                )
            }
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);