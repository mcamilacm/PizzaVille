import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { useNavigate } from "react-router-dom";


const Home =() =>
{
    const navigate =useNavigate()
    return(
<>

<Hero></Hero>

<Grid></Grid>

</>


    )
}

export default Home;