import { Link } from "react-router-dom";
import { CartContext } from "../ShoppingCart/CartContext";
import { useState,useContext } from "react";
import { CartCountContext } from "../ShoppingCart/CartCountContext";


export default function Submit(){
const count = useContext(CartCountContext)

count.setCartCount(() => (0)) 


return (
    
    <div>
        <h3>Order Sent. Thanks for shopping!</h3>
        <Link to="/">Return too Homepage.</Link>

    </div>
)


}