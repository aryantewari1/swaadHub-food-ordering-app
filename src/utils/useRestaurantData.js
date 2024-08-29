import { RES_API } from "../utils/constant";
import { useState, useEffect } from "react";


const useRestaurantData = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList]= useState([]); 
	
  useEffect(()=>{ fetchData(); }, [] ); 
	
	async function fetchData(){

		const data = await fetch(RES_API);
		const jsonData = await data.json(); 
		setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
		
	}

  return {listOfRestaurants, filteredList, setFilteredList}; 
}

export default useRestaurantData; 