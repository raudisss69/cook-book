import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setPending } from "./reduxjs/slices/pendingSlice";


const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ method, setMethod ] = useState('')
    const [ time, setTime ] = useState('')
    const [ listIngredients, setListIngredients ] = useState([])

    const url = useSelector(
        (state) => state.url.url
    )
    const isPending = useSelector(
        (state) => state.pending
    )

    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleIngredients = (e) => {
        e.preventDefault()
        setListIngredients([...listIngredients, ingredients])
        setIngredients('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const recipe = {title, listIngredients, method, time}

        dispatch(setPending(true));

        fetch(url, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log("New recipe added")
            dispatch(setPending(false));
            nav('/')
        })
    }



    return (
        <div className="create">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe title:</label>
                <input 
                    className="inp"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe ingredients:</label>
                <input 
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <button type="button" onClick={handleIngredients}>Add</button>
                <p>Current ingredients: { listIngredients.toString() }</p>
                <label>Recipe method:</label>
                <textarea 
                    className="inp"
                    required
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                />
                <label>Cooking time (in minutes):</label>
                <input 
                    className="inp"
                    type="number"
                    min="0"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                { isPending && <button type="submit">Submit</button>}
                { !isPending && <button disabled>Submiting...</button>}
            </form>
        </div>
    )
}

export default Create;