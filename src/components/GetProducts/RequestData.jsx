import { useState,useEffect } from "react";
  
const RequestData = () => {
 
      const [products, setProducts] = useState(null);
    
      useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=8')
        .then(res=>res.json())
        .then(json=>setProducts(json)) 
      
      }, []);
    
      return (
        <>
          <h1>Products</h1>
          {products ?
           <div>
            {products.map((item) => 
            <div key={item.id}>
                <img src={item.image} alt={item.title} srcset="" />
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                
            </div>)}
           </div>
          
         //While Shop Loads 
         : 'Loading...'}
        </>
      );




    }
    

export default RequestData

/* return (
(
<div>
<h1>Products</h1>
{ console.log(products)}
<div>
{products.map((item) => <li key={item.id}>{item.price}</li>)}
</div>
</div>
) || 
<h1>loading...</h1>

)
 */