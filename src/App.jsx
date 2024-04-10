import { useState, setState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'
import { CartContext } from './components/ShoppingCart/CartContext'


function App() {
  const [userCart, setUserCart] = useState([]);
  const [productData, setProductData] = useState(0);
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {

  if(userCart.length > 0){
  let total = userCart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.quantity,
    0)
  setCartCount(total)

}},[userCart,cartCount])
 
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
