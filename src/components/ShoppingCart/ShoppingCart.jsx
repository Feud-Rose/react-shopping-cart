import { useState, useEffect } from "react"
import styled from "styled-components"

const StyledCartIcon = styled.img`
max-width: 45px;
max-height: auto;
margin-left: auto;
`;


const ShoppingCart = () => {
  

    //On load check localestorage for shopping cart data
    //use

  
    return(
      <div>
        <StyledCartIcon src="../src/assets/shopping-cart.svg" alt=""/>
      </div>
    )
    
}

export default ShoppingCart