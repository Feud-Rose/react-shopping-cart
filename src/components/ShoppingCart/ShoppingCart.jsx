import { useState, setState } from "react"

const ShoppingCart = () => {
    const [items, setItems] = useState([1]);
    setItems({id:1})
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);

  
    return items
    
}

export default ShoppingCart