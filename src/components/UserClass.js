import  { Component } from "react"; 

class UserClass extends Component{
  constructor(props){ 
    super(props);
    this.state = { 
      userInfo: {
        avatar_url: "image loading", 
        name:"page loading", 
        bio: "bio loading",
      },  
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/aryantewari1");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
   
  }

  componentDidUpdate(){
    console.log(this.state.userInfo);
	}

  render()  { 
    const {avatar_url, name, bio} = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url}/>
        <h1>{name}</h1>
        <h2>{bio}</h2>
      </div>
    )
  }
}

export default UserClass; 