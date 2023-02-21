import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"


const RecipeList = () => {

    const [ recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await axios.get("http://localhost:3000/recipes")
        setRecipes(response.data)
    }
    

    const { loading } = useSelector((state) => state.recipe)
    const query = useSelector(
        (state) => state.recipeFilter.query
    )

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
                        <div className="recipe-preview" key={recipe._id}>
                            <h2>{ recipe.title }</h2>
                            <article>{ recipe.time } minutes to cook</article>
                            <footer>{ recipe.method }</footer>
                            <Link to={`/recipes/${recipe._id}`}>
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