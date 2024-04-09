import { useState,useContext } from "react";
import { CartContext } from "../ShoppingCart/CartContext";



export default function ChangeQuantity(){
return(
function handleQuantityChange (prop,quantityChange){

  const userCart = useContext(CartContext)
  const productId = prop.id

  
  if(quantityChange < 0){
    userCart.userCart.map((item) => {
      if (item.id === productId && item.quantity > 0) {
      return { ...item, quantity: item.quantity + quantityChange };
    }
    })
  }
  else
  {
    userCart.userCart.map((item) => {
      if (item.id === productId) {
      return { ...item, quantity: item.quantity + quantityChange };
    }
    })
  }

})}
