import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch'; 
import { useSelector } from "react-redux";

const RecipeDetails = () => {

    const { id } = useParams()

    const url = useSelector(
        (state) => state.url.url
    )

    const { data: recipe, error, isPending } = useFetch(url + id);
 
    return ( 
        <div className="recipe-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
                <article>
                    <h2>{ recipe.title }</h2>
                    <p>Cook Time: { recipe.time } minutes</p>
                    <p className="ing">{recipe.listIngredients.join(', ')}</p>
                    <div>{ recipe.method }</div>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;