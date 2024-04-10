import { useState,useEffect,useContext } from "react";
import { CartContext } from "../ShoppingCart/CartContext";


export default function HandleTotalDiv() {

    const cart = useContext(CartContext)

    const [totals,setTotals] = useState ({
        subtotal: 0,
        taxes: 0,
        shipping: 5.95,
        total: 0
    })

    const handleSubtotal = (p) => {
        
        useEffect(() => {
        const temptTotal = cart.userCart.reduce(
            (oldTotal, newTotal) => oldTotal + (newTotal.price * newTotal.quantity), 0);
       
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
        total: tempTotal
    }))
    }, []);
    
    return totals.total
    }

return( 
    <>
    <div>
        <h3>Subtotal</h3>
        <div>${handleSubtotal(cart)}</div>
        <h3>Tax and Shipping</h3>
        <div>Tax: ${handleTaxes(totals)} (5%)</div>
        <div>Shipping:${totals.shipping}</div>
    </div>
    <div>
        <h3>Total</h3>
        <div>${handleTotal(totals)}</div>
        
    
        <button> {/*call onClick */}Submit</button>
    </div>
</>)
}