import UserClass from "./UserClass";
import {Component} from "react"; 

class About extends Component{ 
	
	constructor(props){
		super(props);
		
	}
	
	render(){ 
		return (
			<div>
				<h1> This is the about section </h1>
				<UserClass />
		  	</div>
		)
	}
}



export default About;