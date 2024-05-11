import React, { useState } from "react";

function Item({ name, category }) {
  const[inCart,setInCart]= useState(false)
  const [isInCart,setIsInCart] = useState(false)
   function handleAddToCart(){
    setInCart(!inCart)
    setIsInCart(!isInCart)
   }

   const cartName = inCart ? 'Remove from cart': 'Add to cart';
   const cartClass = inCart ? 'in-cart': '';
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{cartName}</button>
    </li>
  );
}

export default Item;