import styled from "styled-components"
import cartIcon from "/src/assets/shopping-cart.svg"


const StyledCartIcon = styled.img`
max-width: 45px;
max-height: auto;
margin-left: auto;
`;



const ShoppingCart = () => {
    return(
      <div>
        <StyledCartIcon src={cartIcon} alt="icon"/>
      </div>
    )
    
}

export default ShoppingCart