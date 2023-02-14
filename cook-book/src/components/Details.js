import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAPI } from "../APIcontext";

const Details = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const { url } = useAPI();

    const [data, updateData] = useState([]);
 
    useEffect(function effectFunction() {
        async function fetchData() {
            const response = await fetch(url + id);
            const json = await response.json();
            updateData(json.data);
        }
        fetchData();
    }, []);
    // useEffect(() =>{
    //     fetch('http://localhost:3000/recipes/' + id)
    //     .then(res => {
    //         if(!res.ok){
    //             throw Error("Couldn't fetch data")
    //         }
    //         return res.json()
    //     })
    //     .then(data =>{
    //         datas = data
    //         console.log(data)
    //     })
    //     }, [])
    if(data.lenght === 0){
        <h2>Loading</h2>
    }else{
        console.log(data);
        return(
            <div className="details">
                { data.map((rec) =>{
                return (
                    <div className="recipes">
                        <h1>{rec.title}</h1>
                        <p>{rec.listIng}</p>
                        <p>{rec.meth}</p>
                        <p>{rec.time}</p>
                    </div>
                )})}
            </div>
        );
}
}
export default Details;

