const ItemCard = ({
  itemData 
})=>{

  console.log(itemData);
  return (
    <div>
      <span>{itemData.name}</span>
    </div>
  )
}

export default ItemCard