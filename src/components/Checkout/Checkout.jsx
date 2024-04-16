import { CartContext } from "../ShoppingCart/CartContext"
import { useState,useContext,useEffect } from "react"
import styled from "styled-components"
import ChangeQuantity from "../ShoppingCart/ChangeQuantity";
import handleCheckoutCart from "./HandleCheckoutCart";
import HandleTotalDiv from "./HandleTotalDiv";


const StoreDiv = styled.div`
display: flex;
width:90%;
max-width:1200px;
margin: 1em auto;
`;

const CartDiv = styled.div`
background-color: #0A5C57;
max-width:700px;
margin: 1em;
`;

const TotalsDiv = styled.div`
padding:1em;
border: 2px solid black;
height:fit-content;
margin: 1em 1em 1em auto;

`;


const StyledProductDiv = styled.div`

  align-self: center;
  min-width: 100px;
  
  height:200px;
  padding: 0.75em 1em;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 150px 50px;
  grid-template-columns: 1fr 2fr 1fr;
  justify-self: center;
  text-decoration: none;
  border-radius: .25em;
  margin:1em;
  text-overflow: ellipsis;
`;
const ImagePreview = styled.img`
max-height:100px; 
max-width:100px;
`;
const StyledPrice = styled.p`
grid-area: 1/3;
`;

const StyledRemoveButton = styled.button`
grid-area: 2/3;
height: auto;
`;
const StyledQuantityDiv = styled.div`
grid-area: 2/1/2/3;
height: auto;
justify-content:center;
`;
const StyledQuantityButton = styled.button`

`;

const Checkout = (props) => {


const cart = useContext(CartContext)


const handleDelete = (data) => {
    const filteredCart = cart.userCart.filter((item) => item.id != data);
    const nextCart = cart
    nextCart.setUserCart(filteredCart)  
       
        }
 


const userCart = cart.userCart

    return(
        <>
  
        <h2>Checkout</h2>
           
        {userCart.length > 0 ?
        // Cart Has Items

          (<StoreDiv>
            <CartDiv>
            {handleCheckoutCart({userCart,handleDelete})}
            </CartDiv>
            <TotalsDiv>
            {HandleTotalDiv()}

            </TotalsDiv>
          
                
           </StoreDiv>)

          //Cart is Empty 
          : <p>Cart Empty</p>}
                    
        </>
     

    )

}

export default Checkout