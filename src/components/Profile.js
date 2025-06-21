import {Component} from "react";

class Profile extends Component{

    constructor(props){
        super(props);

        this.state={
            user:{},
        }
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/chandan-yadav0011");
        const jsonData =await  data.json();

        console.log("children- componentDidMount");
        console.log(jsonData)
        this.setState({
            user:jsonData,
        })
    }

    render(){
        return(
            <>
            <h2>Name :  {this.state.user.login} </h2>
            <img src={this.state.user.avatar_url}/>
            </>
        );
    }

}

export default Profile;