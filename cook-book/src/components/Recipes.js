import {Link} from 'react-router-dom';
import { useAPI } from '../APIcontext';

const Recipes = () => {
    const {data, filter} = useAPI()

    return(
        <div className="list">{
            data.filter(data => {
                if(filter === '') {
                    return data
                } else if (data.title.toLowerCase().includes(filter.toLowerCase())) {
                    return data
                    }
                }).map((rec) =>{
                return (
                    <div className="recipes" key={rec.id}>
                        <h1>{rec.title}</h1>
                        <p>{rec.meth}</p>
                        <p>{rec.time}</p>
                        <Link to={`/details/${rec.id}`}>
                            <button>Cook This</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}


export default Recipes;

