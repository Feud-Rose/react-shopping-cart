import { useState, setState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'
import { CartContext } from './components/ShoppingCart/CartContext'


function App() {
  const [userCart, setUserCart] = useState([]);
  const [productData, setProductData] = useState(0);



 
  return (
    <>
    <CartContext.Provider value={{userCart,setUserCart}}>

    <NavBar/>
    <Outlet/>
    </CartContext.Provider>
    </>
  );
}

export default App
