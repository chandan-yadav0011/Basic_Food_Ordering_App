import { Outlet } from "react-router";
import Profile from "./Profile";
import React from "react";

export const About=()=>{
    return <div>
        <h1>ABOUT US</h1>
        <p>Food-Villa is new age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>

        <Outlet/>
    </div>
}

class About2 extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Parent- ComponentDidMount");
    }

    render(){
        return (
            <div>
                <h1>About Us</h1>
                <p>Food-Villa is new age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
                <Outlet/>
            </div>
        );
    }

};

export default About2;
