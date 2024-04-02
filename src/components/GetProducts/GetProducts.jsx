
const GetProducts = () => {
fetch('https://fakestoreapi.com/products?limit=8')
.then(res=>res.json())
.then(json=>console.log(json))
.then((json) => {
    return json
})
}
export default GetProducts