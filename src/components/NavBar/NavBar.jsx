import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState,useEffect,useContext } from "react";
import { CartContext } from "../ShoppingCart/CartContext";
import { CartCountContext } from "../ShoppingCart/CartCountContext";


const StyledLink = styled(Link)`
  padding: 0.75em 1em;
  background-color: ;
  color: black;
  display: inline-flex;
  text-decoration: none;
  border-radius: .25em;
  margin:0.25em;
  border: solid #0A0A0A 0.25em;
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
    background-color: #e7ecef;
    border: solid #0A0A0A 0.25em;
    max-width: 100%;

`;





export default function NavBar(props){
const cart = useContext(CartContext)
const count = useContext(CartCountContext)

    return (
        
          <StyledDiv role="navigation">
            
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/Store">Store</StyledLink>
              
              <CartCheckoutHolder >
                
                 <p>{count.cartCount}</p>
               
                <ShoppingCart />
                <CartLink to="/Checkout"> Checkout</CartLink>
              </CartCheckoutHolder >
            
          </StyledDiv>
          
        
      );
    
}
