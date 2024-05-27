import { Link } from "react-router-dom";
import PizzaMain from "../img/pizza.png";
const Hero = () => {
    return (
        <hero>

        <div className="containers_hero">
        <div className="main_title">

            <h1>Order your special <b>Pizza!</b></h1>
            <p>Our true Italian pizza is made for you to feel and taste delicious. She will bring warmth and Italian taste right into your heart!</p>
          
          <Link to="/pizzas">
            <button> PIZZAS</button>
            </Link>
        </div>

        <div className="image_hero">
        <img className="pizza_img" src={PizzaMain} alt="cake" />
        </div>

        </div>

    </hero>
    );
};

export default Hero;
