import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getRecipes } from "./reduxjs/slices/recipeSlice"


const RecipeList = () => {
    const { recipes, loading } = useSelector((state) => state.recipe)
    const query = useSelector(
        (state) => state.recipeFilter.query
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipes())
    }, [])
    
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="recipe-list">
            {
                recipes.filter(recipes => {
                    if(query === '') {
                        return recipes
                    } else if (recipes.title.toLowerCase().includes(query.toLowerCase())) {
                        return recipes
                    }
                }).map((recipe) => {
                    return (
                        <div className="recipe-preview" key={recipe.id}>
                            <h2>{ recipe.title }</h2>
                            <article>{ recipe.time } minutes to cook</article>
                            <footer>{ recipe.method }</footer>
                            <Link to={`/recipes/${recipe.id}`}>
                                <button>Cook this</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeList