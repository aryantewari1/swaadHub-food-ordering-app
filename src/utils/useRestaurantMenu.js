import { MENU_API } from "../utils/constant";
import { useEffect, useState } from "react";
const useRestaurantMenu  = (resId) =>{
  
  const [resInfo, setResInfo] = useState(null);

  useEffect(()=>{  fetchData(); } ,[] );

  async function fetchData(){
      const data = await fetch(MENU_API + resId);
      const jsonData = await data.json(); 
      setResInfo(jsonData);
  }

  return resInfo;
}

export default useRestaurantMenu; 