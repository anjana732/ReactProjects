import Items from "./Items"

function FoodItems({items}){
  return(
    <>
    <ul class="list-group">
        {items.map((item) => (
        <Items fooditem={item}></Items>))}
    
    </ul>
    </>
  )
}
export default FoodItems