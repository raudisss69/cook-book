import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAPI } from "../APIcontext";


const Create = () => {
    const [title, setTitle] = useState(''); 
    const [ing, setIng] = useState(''); 
    const [meth, setMeth] = useState(''); 
    const [time, setTime] = useState('');
    const [listIng, setListIng] = useState([]);
    const { url } = useAPI();
    const nav = useNavigate()

    const addIng = (e) => {
        e.preventDefault()
        setListIng([...listIng, ing])
        setIng('')
    }
    
    const submitDB = (e) => {
        e.preventDefault()
        const recipe = {title, listIng, meth, time}
        fetch(url, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(recipe)
        }).then(() =>{
            nav("/")
        })
    } 

    return(
        <div className="form">
            <form onSubmit={submitDB}>
                <h1>Create a new recipe!</h1>
                <label>Recipe title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Recipe ingredients:</label> 
                <input 
                type="text"
                value={ing}
                onChange = {(e) => setIng(e.target.value)}
                />
                <button type="button" onClick={addIng}> ADD </button>
                <label>Recipe method:</label>
                <input 
                type="text"
                required 
                value={meth}
                onChange = {(e) => setMeth(e.target.value)}
                />
                <label>Cooking time (min):</label>
                <input 
                type="number"
                min="0"
                required 
                value={time}
                onChange = {(e) => setTime(e.target.value)}
                />
                <button type="submit"> SUBMIT </button>
            </form>
        </div>
    );
}

export default Create;