import { useState, setState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import GetProducts from './components/GetProducts/GetProducts'

function App() {
  const [userCart, setUserCart] = useState({})
  const [productData, setProductData] = useState({})
  .setProductData = GetProducts()

 
  return (
    <>
    <NavBar/>
    <Outlet />
    </>
  );
}

export default App
