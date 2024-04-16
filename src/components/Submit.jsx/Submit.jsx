import { Link } from "react-router-dom";
import { CartContext } from "../ShoppingCart/CartContext";
import { useState,useContext } from "react";


export default function Submit(){

return (
    
    <div >
        
        <h3>Order Sent. Thanks for shopping!</h3>
        <Link to="/">Return too Homepage.</Link>

    </div>
)


}