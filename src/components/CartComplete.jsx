import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartComplete = () => {
    const { carrito, addProductToCart, removeProductFromCart } = useContext(PizzaContext);

    const total = carrito.reduce((acc, product) => acc + (product.price * product.count), 0);



    return (
        <div className="cart_section">
            <div className="table_container">
                <h3>Order Details</h3>
                <div className="cart_container">
                    {carrito && carrito.map((product) => (
                        <div className="product_details" key={product.id}>
                            <div className="img_name">
                                <img className="pizza3_img" src={product.img} alt={product.name} />
                                <p>{product.name}</p>
                            </div>
                            <div className="total_count">
                                <p>${product.price * product.count}</p>
                                <button 
                                    className="button_cart" 
                                    onClick={() => removeProductFromCart(product)}
                                >-</button>
                                <p>{product.count}</p>
                                <button 
                                    className="button_cart" 
                                    onClick={() => addProductToCart(product)}
                                >+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="total_price">Total: ${total.toFixed(2)}</h1>
                <div className="checkout">
                             
          <Link to="/">
                <button className="see_button">Return</button>
                </Link>
                        <button >Check Out</button>
                </div>
            </div>
        </div>
    );
}

export default CartComplete;
