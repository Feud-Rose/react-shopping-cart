import { useState, setState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'

function App() {
  const [userCart, setUserCart] = useState(0);
  const [productData, setProductData] = useState(0);


 
  return (
    <>
    <NavBar
    userCart/>
    <Outlet
    productData
    userCart />
    </>
  );
}

export default App
