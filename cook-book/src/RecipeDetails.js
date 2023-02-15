import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch'; 
import { useSelector } from "react-redux";

const RecipeDetails = () => {

    const nav = useNavigate()
    const { id } = useParams()

    const url = useSelector(
        (state) => state.url.url
    )

    const { data: recipe, error, isPending } = useFetch(url + id);

    const handleClick= () => {
        fetch(url + recipe.id, {
            method: 'DELETE'
        }).then(() => {
            nav('/');
        })
    }
 
    return ( 
        <div className="recipe-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
                <article>
                    <h2>{ recipe.title }</h2>
                    <p>Takes { recipe.time } minutes to cook</p>
                    <p className="ing">{recipe.listIngredients.join(', ')}</p>
                    <div>{ recipe.method }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;