import RestroCard from "./RestroCard";
import { restuarentList } from "../config";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";

           
const Body= ()=>{

    const [allRestuarents, setAllRestuarents] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestuarents, setfilteredRestuarents] = useState([]);


    const {user,setUser}= useContext(UserContext);

    // setRestuarents(restuarentList);

    useEffect(()=>{
       getRestrauents();
       //console.log("sf  "+allRestuarents)
    },[]);

    async function getRestrauents() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.972009&lng=73.0348229&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        
        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       setAllRestuarents(jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilteredRestuarents(jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       // console.log(jsonData)
       
    }
 
    function filterData(allRestuarents,searchInput){
       // console.log(restuarents)
        const data = allRestuarents.filter((restuarent)=>
                restuarent?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
        
            
        );

        
        return data;
    }
     

    const isOnline = useOnline();

    if(!isOnline){
        return <h1>You went Offline!!!. Please check your Internet connection</h1>
    }
       
        return allRestuarents.length===0?(<Shimmer/>):(
        <>
        
      
            <div className="p-2 flex justify-center bg-amber-200 ">
                <input type="text"
                    placeholder="search here"
                    className="p-2 my-3 border-2 border-black rounded-md w-2xl focus:bg-pink-200"
                    value={searchInput}
                    onChange={(e)=>{

                    
                       setSearchInput(e.target.value);
                    }}
                    
                
                 />

                    <button className="p-3 size- m-3 bg-[#09ad09] hover:bg-amber-900 rounded-md text-white" 
                        onClick={()=>{
                        const data = filterData(allRestuarents,searchInput);
                        
                        
                        setfilteredRestuarents(data);
                        }}
                            >Search</button>  
                    
                    {/* <input type="text" className="border-2" onChange={e=>{
                        setUser(
                            {
                                ...user,
                                name:e.target.value,
                              
                            }
                            );
                    }} />

                    <input type="text" className="border-2" onChange={e=>{
                        setUser(
                            {
                               ...user,
                                email:e.target.value,
                            }
                            );
                    }} /> */}

                    
               
            </div>
            
            <div className="flex flex-wrap">
            {
                
                 (filteredRestuarents.length===0)?(<h3>No results found.</h3>):
                filteredRestuarents.map((restuarent,index)=>{
                 
                    return <Link to={"/restuarent/"+ restuarent?.info?.id} key={index}><RestroCard {...restuarent.info}/></Link>
                })
            }
            
            </div>
        </>
        
        
    );
    }
   


export default Body;