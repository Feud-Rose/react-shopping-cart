import { useState, setState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'
import { CartContext } from './components/ShoppingCart/CartContext'


function App() {
  const [userCart, setUserCart] = useState({
    cart: [],
    totalQuantity: 0});
  const [productData, setProductData] = useState(0);
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    console.log(userCart)
    if(userCart.cart.length > 0){
      console.log(cartCount)
  
    let total = userCart.reduce(
      (prevValue, currentValue) => prevValue + currentValue.quantity,
      0)
      console.log(userCart)
  
    setCartCount(total) 
  }
  },[userCart,cartCount])
 
  return (
    <>
    <CartContext.Provider value={{userCart,setUserCart}}>
    <NavBar
    value = {cartCount}
    />
    <Outlet/>
    </CartContext.Provider>
    </>
  );
}

export default App
