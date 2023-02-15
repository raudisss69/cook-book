import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setQuery } from "./reduxjs/slices/querySlice";

const Navbar = () => {
    const query = useSelector(
        (state) => state.recipeFilter.query
    )
        
    const dispatch = useDispatch()

    return (
        <nav className="navbar">
            <h1>Cook Book</h1>
            <div className="search">
                <label>Search: </label>
                <input placeholder="Enter Recipe Title" onChange={(e) => 
                    dispatch(setQuery(e.target.value))
                    } />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Recipe</Link>
            </div>
        </nav>
    );
}

export default Navbar;