import {useState,useContext } from "react"
import styled from "styled-components";
import ChangeQuantity from "../ShoppingCart/ChangeQuantity";
import { CartContext } from "../ShoppingCart/CartContext";



const StyledProductDiv = styled.div`

  align-self: center;
  min-width: 100px;
  
  height:200px;
  padding: 0.75em 1em;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 50px 50px 50px 50px;
  grid-template-columns: 100px 2fr .5fr .5fr;
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
grid-area: 1/3/1/5;
`;

const StyledRemoveButton = styled.button`
grid-area: 4/1;
height: auto;
`;
const StyledQuantityDiv = styled.div`
grid-area: 2/3/2/5;
height: auto;
margin: auto;
`;
const StyledQuantityPlus = styled.button`
grid-area: 3/3;
`;
const StyledQuantityMinus = styled.button`
grid-area: 3/4;
`;
const StyledTotal = styled.p`
grid-area: 4/3/4/5
`;


export default function handleCheckoutCart(props) {
    const userCart = useContext(CartContext)

    function handleChangeQuantity(productId,quantityChange){
        const nextCart = userCart
        if(quantityChange > 0){
            nextCart.userCart.map((item) => {
                if(item.id === productId) {
                    item.quantity += quantityChange
                    nextCart.setUserCart(prevState =>[...prevState]) 
        
                    
                }
        })
        }
        else if(quantityChange < 0)
        {
            nextCart.userCart.map((item) => {
                if(item.id === productId) {
                    const checkForPositive = item.quantity += quantityChange
                    if(checkForPositive >= 1)
                    {
                    
                    nextCart.setUserCart(prevState =>[...prevState])
                    } 
                    else
                    {
                    props.handleDelete(productId)
                    }
                }
        })
        }
      
      }



    return(
        props.userCart.map((item) => 
        <StyledProductDiv key={item.id}>
            <ImagePreview src={item.image} alt={item.title} srcSet="" />
            <p>{item.title}</p>
            
            <StyledPrice>${+ item.price}</StyledPrice>
            <StyledQuantityDiv>
                 Quantity:{item.quantity} 
            </StyledQuantityDiv>
            <StyledQuantityPlus onClick={() => handleChangeQuantity(item.id,1)}>+</StyledQuantityPlus>
            <StyledQuantityMinus onClick={() => handleChangeQuantity(item.id,-1)}>-</StyledQuantityMinus>
            <StyledTotal>Total: ${+ (item.price * item.quantity)}</StyledTotal>
            <StyledRemoveButton onClick={() => props.handleDelete(item.id)}>Delete</StyledRemoveButton>
            
        </StyledProductDiv>)
        )
}