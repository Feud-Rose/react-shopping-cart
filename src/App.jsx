import { useState, setState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'
import { CartContext } from './components/ShoppingCart/CartContext'
import { CartCountContext } from './components/ShoppingCart/CartCountContext'

function App() {
  const [userCart, setUserCart] = useState([]);
  const [productData, setProductData] = useState(0); ///Check and remove
  const [cartCount, setCartCount] = useState(0)
 

  const handleCartCount = () => {
    useEffect(() => {
  
    if(userCart.length > 0){
    let total = userCart.reduce(
      (prevValue, currentValue) => prevValue + currentValue.quantity,
      0)
    setCartCount(total)
    }
    else setCartCount(() => (0))
  
    },[userCart])
    
    
  }
  return (
    
    <CartContext.Provider value={{userCart,setUserCart}}>
    <CartCountContext.Provider value={{cartCount, setCartCount}}>
      <NavBar count={handleCartCount()}/>
      <Outlet/>
    </CartCountContext.Provider>
    </CartContext.Provider>
   
  );
}

export default App
