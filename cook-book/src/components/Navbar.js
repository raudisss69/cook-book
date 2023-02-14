import {Link} from 'react-router-dom';
import { useAPI } from '../APIcontext';

const Navbar = () => {
    const {setFilter} = useAPI();
    return(
        <nav className="navbar">
            <h1>Recipes Cook Book</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create">Create Recipe</Link>
                <input 
                type="text" 
                onChange = {(e) => setFilter(e.target.value)}
                />
            </div>
        </nav>
    );
}

export default Navbar;