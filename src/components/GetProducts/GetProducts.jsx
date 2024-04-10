import { useState,useEffect,useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../ShoppingCart/CartContext";


const StoreProductsDiv = styled.div`
  min-width: 230px;
  max-width: 95%;
  padding: 0.75em 1em;
  background-color: #333333;
  display: flex;
  flex-flow: row wrap ;
  text-decoration: none;
  border-radius: .25em;
  margin:0.25em;
 
 
`;

const ProductCardDiv = styled.div`
  align-self: center;
  min-width: 100px;
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

const StyledDescription = styled.p`
text-overflow: ellipsis;
grid-area: 2/2;
max-width: 75ch;

`

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



const GetProducts = () => {
 
      const [products, setProducts] = useState(null);
      const userCart = useContext(CartContext)

      
      useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=9')
        .then(res=>res.json())
        .then(json=>setProducts(json)) 
      
      }, []);
 
      function handleAddTooCart(data,userCart) {
        //check if item exists

       const nextCart =  userCart
       console.log(nextCart)
       let itemExists = nextCart.userCart.find(x => x.id === data.item.id)
        console.log(itemExists)
        //!if

       if(itemExists){  
        let productId = itemExists.id
        console.log(productId)

      /*   userCart.setUserCart((prevState) => { */
            nextCart.userCart.map((item) => {
                if(item.id === productId) {
                    item.quantity += 1
                    nextCart.setUserCart(prevState =>[...prevState]) 
        
                    
                }
        })
       /*  }) */
        console.log(userCart)
        }
   
         
       else {
           data.item.quantity = 1
        nextCart.setUserCart(prevState =>[...prevState,data.item]) 
       }

       console.log(userCart)
    }
   
      return (
        <>
          <h1>Products</h1>
          {products ?
           <StoreProductsDiv>
            {products.map((item) => 
            <ProductCardDiv key={item.id}>
                <ImagePreview src={item.image} alt={item.title} srcSet="" />
                <div>{item.title}</div>
                
                <StyledDescription> {item.description.length > 70 ?
                `${item.description.substring(0, 70)}...` : item.description}
                </StyledDescription>
                <StyledPrice>${+ item.price}</StyledPrice>
                <StyledButton onClick={() => handleAddTooCart({item},userCart)}>Add too Cart</StyledButton>
                
            </ProductCardDiv>)}
           </StoreProductsDiv>
          
         //While Shop Loads 
         : 'Loading...'}
        </>
      );
 } 




    
    

export default GetProducts
