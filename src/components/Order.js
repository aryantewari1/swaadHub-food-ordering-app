import {Component} from "react"; 
import { IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

class Order extends Component { 
  constructor(props){
    super(props); 
    this.state ={ 
      count: 0, 
    }
  }

  componentDidMount(){
    console.log("component did Mount")
  }


  render(){
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-[300px]">
            <img className=""src={IMG_URL}/>
          </div>
          <div className="">
            <p className="text-center mt-8 font-semibold text-xl text-[rgb(83,86,101)] font-[Montserrat]">Your cart is empty</p>
            <p className="text-sm text-[rgb(126,148,160)] font-[Montserrat]">You can go back to homepage to view more restaurants</p>
          </div>
          <div className="mt-7 text-center bg-slate-400 text-white py-2 px-4 font-semibold  ">
            <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;