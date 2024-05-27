import { createContext, useState, useEffect } from "react";
import pizza from "../pizzas.json";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);



  const addToCart = ({id, price, name, img}) => {
    const productByIndex = carrito.findIndex((p) => p.id == id);
    const producto = { id, price, name, img, count: 1 };
    console.log(productByIndex);
    console.log(carrito);
    


    if (productByIndex >= 0) {

    carrito[productByIndex].count++
    setCarrito([...carrito])
    }

    else{
setCarrito([...carrito,producto])
    }

    console.log(carrito);
  };

  useEffect(() => {
    setPizzas(pizza);
  }, []);

  const addProductToCart = (product) => {
    setCarrito((prevCarrito) => {
        const productExists = prevCarrito.find(item => item.id === product.id);
        if (productExists) {
            return prevCarrito.map(item => 
                item.id === product.id ? { ...item, count: item.count + 1 } : item
            );
        } else {
            return [...prevCarrito, { ...product, count: 1 }];
        }
    });
};

const removeProductFromCart = (product) => {
  setCarrito((prevCarrito) => {
      const productExists = prevCarrito.find(item => item.id === product.id);
      if (productExists.count === 1) {
          return prevCarrito.filter(item => item.id !== product.id);
      } else {
          return prevCarrito.map(item => 
              item.id === product.id ? { ...item, count: item.count - 1 } : item
          );
      }
  });
};


  return (
    <PizzaContext.Provider value={{ pizzas, carrito,setPizzas, addToCart,addProductToCart,removeProductFromCart }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
