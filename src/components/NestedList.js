
import NestedListItem  from "./NestedListItem";

const NestedList = ({data,show,showTheItem})=>{
    
  const {title} = data?.card?.card;
  const {categories} = data?.card?.card;
  
  return(
    <div className="  ">
      <div className="font-[Montserrat] text-lg p-2 pl-1 font-bold ml-2">
        {title} 
      </div>
      <div className="">
        {categories.map((item)=>{
          return (
            <NestedListItem key={item?.title} data ={item} show ={show} showTheItem ={showTheItem}/>
          )
        })}
      </div>
      <div className="w-full h-4 bg-slate-200 my-2 mt-0"></div>
    </div>
  )
}
export default NestedList; 