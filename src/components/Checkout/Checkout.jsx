import { CartContext } from "../ShoppingCart/CartContext"
import { useState,useContext } from "react"
import styled from "styled-components"

const StyledProductDiv = styled.div`
border: 5px solid #1C6EA4;
width:400px;
height:200px;

`;



const Checkout = () => {


const cart = useContext(CartContext)

const userCart = cart.userCart
console.log(userCart)


    return(
        <>
       { console.log(userCart)}

        <h2>Checkout</h2>
           
           {userCart.length > 0 ?
           (<div>
            {userCart.map((item) => 
            <StyledProductDiv key={item.id}>
                {console.log(item.title)}
                <img src={item.image} alt={item.title} srcSet="" />
             
                <button>Remove From Cart</button>
                
            </StyledProductDiv>)}
           </div>)
          : <p>Cart Empty</p>}
                    
        </>
     
        







        /* 
        
        
        -Add some sorta tax/shipping numbers(Consider looking a api for location based taxes)

        -Buttons! that go nowhere at bottom(placeholder confirm/send)
        
        */

    )

}

export default Checkout