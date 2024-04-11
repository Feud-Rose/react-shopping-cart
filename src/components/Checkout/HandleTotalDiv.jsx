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

    const handleSubtotal = () => {
        
        useEffect(() => {
        const temptTotal = cart.userCart.reduce(
            (oldTotal, newTotal) => oldTotal + (newTotal.price * newTotal.quantity), 0);
            console.log(totals.subtotal)
        const roundedSubTotal = temptTotal.toFixed(2)
        setTotals(prevState => ({
            ...prevState,
            subtotal: roundedSubTotal})
            )
         }, [cart]);
         return (
            totals.subtotal
         )
    } 
    
    const handleTaxes = () => {
        useEffect(() => {
        console.log(totals)
        const tax =+totals.subtotal * 0.05
        const roundedTax = tax.toFixed(2)
        setTotals(prevState => ({
            ...prevState,
            taxes: roundedTax})
            )
         }, [cart,totals]);
         return( 
            totals.taxes
        )
    } 

    const handleTotal = () => {
        useEffect(() => {
    const tempTotal = +totals.subtotal + +totals.shipping + +totals.taxes
    const roundedTotal = tempTotal.toFixed(2)
    setTotals(prevState => ({
        ...prevState,
        total: roundedTotal
    }))
    }, [cart,totals]);
    
    return totals.total
    }

return( 
    <>
    <div>
        <h3>Subtotal</h3>
        <div>${handleSubtotal()}</div>
        <h3>Tax and Shipping</h3>
        <div>Tax: $ {handleTaxes()} (5%)</div>
        <div>Shipping:${totals.shipping}</div>
    </div>
    <div>
        <h3>Total</h3>
        <div>${handleTotal()}</div>
        
    
        <button> {/*call onClick */}Submit</button>
    </div>
</>)
}