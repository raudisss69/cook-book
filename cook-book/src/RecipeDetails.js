import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeDetails = () => {

    const [recipe, setRecipe] = useState([])
    const [listIng, setListIng] = useState([])

    const nav = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`);
        setRecipe(response.data)
        setListIng(response.data.listIngredients)
      };

    const handleClick = async () => {
        try {
            await axios.delete(`http://localhost:3000/recipes/${id}`);
            nav("/")
          } catch (error) {
            console.log(error);
          }
        };
 
    return ( 
        <div className="recipe-details">
                <article>
                    <h2>{ recipe.title }</h2>
                    <p>Takes { recipe.time } minutes to cook</p>
                    <p className="ing">{listIng.join(", ")}</p>
                    <div>{ recipe.method }</div>
                </article>
        </div>
     );
}
 
export default RecipeDetails;