import { useState,useContext } from "react";
import { CartContext } from "../ShoppingCart/CartContext";



export default function ChangeQuantity(prop,quantityChange){


  const userCart = useContext(CartContext)
  const productId = prop.value
  console.log(productId)
  
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

}
