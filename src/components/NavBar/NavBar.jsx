import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState,useEffect,useContext } from "react";
import { CartContext } from "../ShoppingCart/CartContext";


const StyledLink = styled(Link)`
  padding: 0.75em 1em;
  background-color: #333333;
  color: white;
  display: inline-flex;
  text-decoration: none;
  border-radius: .25em;
  margin:0.25em;
  &:hover {
  background-color: #11109c;
  }
`;

const CartCheckoutHolder = styled.div`
margin-left: auto;
display:flex;
align-items:center;

`;

const CartLink = styled(StyledLink)`
  
  

`;

const StyledDiv = styled.div`
    text-align: center;
    display:flex;
    background-color: #e6e6ea;
    max-width: 100%;

`;



function NavBar(props){
const cart = useContext(CartContext)
console.log(cart)
console.log(props)




    return (
        
          <StyledDiv role="navigation">
            
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/Store">Store</StyledLink>
              
              <CartCheckoutHolder >
                
                 <p>{props.value}</p> 
               
                <ShoppingCart />
                <CartLink to="/Checkout"> Checkout</CartLink>
              </CartCheckoutHolder >
            
          </StyledDiv>
          
        
      );
    
}
export default NavBar