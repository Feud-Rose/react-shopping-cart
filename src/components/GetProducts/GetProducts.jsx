import { useState,useEffect,useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../ShoppingCart/CartContext";


const StoreProductsDiv = styled.div`
  min-width: 230px;
  max-width: 95%;
  padding: 0.75em 1em;
  background-color: #c0c0c0;
  display: flex;
  flex-flow: row wrap ;
  text-decoration: none;
  border-radius: .25em;
  margin:auto;
  border: solid #0A0A0A 0.25em;
 
`;

const ProductCardDiv = styled.div`
  align-self: center;
  min-width: 100px;
  max-width: 300px;
  height:200px;
  padding: 0.75em 1em;
  background-color: #FFFFFF;
  display: grid;
  grid-template-rows: 50px 100px 50px;
  grid-template-columns: auto auto;
  justify-self: center;
  text-decoration: none;
  border-radius: .25em;
  margin: 10px auto;
  text-overflow: ellipsis;
`;

const StyledTitle= styled.div`
text-overflow: ellipsis;
grid-area: 1/2;
max-width: 20ch;
overflow: hidden;
`
const StyledDescription = styled.p`
text-overflow: ellipsis;
grid-area: 2/2;
max-width: 75ch;
overflow: hidden;
`

const ImagePreview = styled.img`
max-height:auto; 
max-width:80px;


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
       let itemExists = nextCart.userCart.find(x => x.id === data.item.id)
        //!if

       if(itemExists){  
        let productId = itemExists.id

      /*   userCart.setUserCart((prevState) => { */
            nextCart.userCart.map((item) => {
                if(item.id === productId) {
                    item.quantity += 1
                    nextCart.setUserCart(prevState =>[...prevState]) 
        
                    
                }
        })
       /*  }) */
        }
   
         
       else {
           data.item.quantity = 1
        nextCart.setUserCart(prevState =>[...prevState,data.item]) 
       }

    }
   
      return (
        <>
          <h1>Products</h1>
          {products ?
           <StoreProductsDiv>
            {products.map((item) => 
            <ProductCardDiv key={item.id}>
                <ImagePreview src={item.image} alt={item.title} srcSet="" />
                <StyledTitle>{item.title}</StyledTitle>
                
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
