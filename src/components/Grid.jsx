import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { PizzaContext } from "../context/PizzaContext";

const Grid = () => {
    const { pizzas, addToCart } = useContext(PizzaContext);
    const navigate = useNavigate(); // Obtén la función navigate

    return (
        <main>
            <p>Find your delicious Pizza</p>
            <h3 className="h3_pizza">Pizza Menu</h3>
            <div className="cards_container">
                {pizzas && pizzas.map((pizza) => (
                    <div className="cards_info" key={pizza.id}>
                        <img className="pizza2_img" src={pizza.img} alt={pizza.name} />
                        <h2>{pizza.name}</h2>
                        <div className="ingredients">
                            <h3>Ingredients:</h3>
                            <ul>
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <h2>${pizza.price}</h2>
                        <div className="buttons_info">
                            <button className="see_button" >See More</button>
                            <button onClick={() => addToCart(pizza)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Grid;
