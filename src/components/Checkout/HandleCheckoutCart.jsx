import {useState,useContext } from "react"
import styled from "styled-components";

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

export default function handleCheckoutCart(props) {
    console.log(props)
    return(
        props.userCart.map((item) => 
        <StyledProductDiv key={item.id}>
            <ImagePreview src={item.image} alt={item.title} srcSet="" />
            <p>{item.title}</p>
            
            <StyledPrice>${+ item.price}</StyledPrice>
            <StyledQuantityDiv>
                <StyledQuantityButton>+</StyledQuantityButton> Quantity:{item.quantity} <StyledQuantityButton>-</StyledQuantityButton>
            </StyledQuantityDiv>
            <StyledRemoveButton onClick={() => props.handleDelete(item.id)}>Delete</StyledRemoveButton>
            
        </StyledProductDiv>)
        )
}