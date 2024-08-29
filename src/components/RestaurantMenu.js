import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
    const {resId} = useParams(); 
    const resInfo = useRestaurantMenu(resId); 
    
    if(resInfo === null) return <Shimmer />; 
    const {avgRatingString, 
        totalRatingsString,
        costForTwoMessage, 
        cuisines,
        areaName,
    }= resInfo?.data?.cards[2]?.card?.card?.info; 
;
    const {text} = resInfo?.data?.cards[0]?.card?.card; 
    
    
    return (
        <div className="flex flex-col items-center h-full">
            <div className=" w-[52%] h-full ">
                <div className="w-full mb-9 text-[9px]  font-[Montserrat] text-[rgb(96,96,96)]">
                    Home  /  kanpur  / <span className="text-slate-600 font-medium">{text}</span> 
                </div>
                <div className="w-full">
                    <div className="pt-3 pr-3 pl-2 pb-5 font-[Montserrat] font-extrabold text-2xl">
                        {text}
                    </div>
                    <div className="flex justify-center bg-gradient-to-t from-slate-300 to-white h-52 rounded-b-[35px] mb-10">
                        <div className="w-[97%] h-[93%]  bg-white border-[1px] border-solid border-slate-200 rounded-3xl">
                            <div>
                                
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="w-full ">
                    <RestaurantCategories resCat ={resInfo} />
                </div>
            </div>
        </div>
  )
}

export default RestaurantMenu; 
