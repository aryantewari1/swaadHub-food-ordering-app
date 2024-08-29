import ItemList from "./ItemList";
import NestedList from "./NestedList";
import { useState } from "react";

const RestaurantCategories = ({resCat})=>{
  
  const categories = resCat?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>
    item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

  const [showIndex, setShowIndex] = useState(null);

  const toggleItem = (index) =>{
    setShowIndex((prevIndex)=>{
      return prevIndex === index ? null : index;
    })
  }

  return(
    <div className="h-full">
      {categories.map((category,index) => {
      return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
        <ItemList key={category?.card?.card?.title} data={category}  show={index==showIndex} showTheItem = {()=>toggleItem(index)}/>
      ) : (
        <NestedList key={category?.card?.card?.title} data={category} show={index==showIndex} showTheItem = {()=>toggleItem(index)}/>
      );
    })}
    </div>
  )
}

export default RestaurantCategories;
