import { CartContext } from "../ShoppingCart/CartContext"
import { useState,useContext,useEffect } from "react"
import styled from "styled-components"

const StoreDiv = styled.div`
display: flex;
width:90%;

`;

const CartDiv = styled.div`
background-color: #0C1B33;
width:70%;
margin: 2em;
`;

const TotalsDiv = styled.div`

border: 2px solid black;
`;


const StyledProductDiv = styled.div`

  align-self: center;
  min-width: 100px;
  width:60%;
  max-width: 300px;
  height:200px;
  padding: 0.75em 1em;
  background-color: #e6e6ea;
  display: grid;
  grid-template-rows: 25px 125px 50px;
  grid-template-columns: auto auto;
  justify-self: center;
  text-decoration: none;
  border-radius: .25em;
  margin: 10px auto;
  text-overflow: ellipsis;
`;
const ImagePreview = styled.img`
max-height:auto; 
max-width:100px;
`;
const StyledPrice = styled.p`
grid-area: 3/1;
`;

const StyledButton = styled.button`
grid-area: 3/2;
`;


const Checkout = () => {


const cart = useContext(CartContext)
const [totals,setTotals] = useState ({
    subtotal: 0,
    taxes: 0,
    shipping: 5.95,
    total: 0
})

const handleSubtotal = (props) => {
    
    useEffect(() => {
    const temptTotal = props.reduce(
        (oldTotal, newTotal) => oldTotal + newTotal.price, 0);
   
    console.log(temptTotal)
    setTotals(prevState => ({
        ...prevState,
        subtotal: temptTotal})
        )
     }, []);
     console.log(totals)
     return totals.subtotal
} 

const handleTaxes = (props) => {
    
    useEffect(() => {
    const tax =+props.subtotal * 0.05
    const roundedTax = tax.toFixed(2)
    setTotals(prevState => ({
        ...prevState,
        taxes: roundedTax})
        )
     }, []);
     return totals.taxes
} 
const handleTotal = (props) => {
    useEffect(() => {
const tempTotal = +props.subtotal + +props.shipping + +props.taxes
console.log(tempTotal)
setTotals(prevState => ({
    ...prevState,
    totals: tempTotal
}))
}, []);

return totals.totals
}
const userCart = cart.userCart
console.log(userCart)


    return(
        <>
       { console.log(userCart)}

        <h2>Checkout</h2>
           
        {userCart.length > 0 ?
        // Cart Has Items

          (<StoreDiv>
            <CartDiv>
            {userCart.map((item) => 
            <StyledProductDiv key={item.id}>
                <ImagePreview src={item.image} alt={item.title} srcSet="" />
                <p>{item.title}</p>
                
                <StyledPrice>${+ item.price}</StyledPrice>
                <StyledButton>Remove From Cart</StyledButton>
                
            </StyledProductDiv>)
            }
            </CartDiv>
            <TotalsDiv>
                <div>
                    <h3>Subtotal</h3>
                    <div>{handleSubtotal(userCart)}</div>
                    <h3>Tax and Shipping</h3>
                    <div>Tax:{handleTaxes(totals)}</div>
                    <div>Shipping:{totals.shipping}</div>
                </div>
                <div>
                    <h3>Total</h3>
                    <div>{handleTotal(totals)}</div>
                    
                   
                    <button> {/*call onClick */}Submit</button>
                </div>

            </TotalsDiv>
          
                
           </StoreDiv>)

          //Cart is Empty 
          : <p>Cart Empty</p>}
                    
        </>
        /* 
        
        
        -Add some sorta tax/shipping numbers(Consider looking a api for location based taxes)

        -Buttons! that go nowhere at bottom(placeholder confirm/send)
        
        */

    )

}

export default Checkout