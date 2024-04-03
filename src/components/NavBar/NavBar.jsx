import styled from "styled-components";
import { Link } from "react-router-dom";


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

const CartLink = styled(StyledLink)`
  justify-self: flex-end;
  margin-left: auto;

`;

const StyledDiv = styled.div`
    text-align: center;
    display:flex;
    background-color: #e6e6ea;
    max-width: 100%;

`;



function NavBar(userCart){
  console.log(userCart)
    return (
        
          <StyledDiv role="navigation">
            
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/Store">Store</StyledLink>
              <CartLink to="/Checkout"> Checkout</CartLink>
            
          </StyledDiv>
          
        
      );
    
}
export default NavBar