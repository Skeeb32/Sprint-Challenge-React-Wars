import React, { useState, useEffect } from "react";
import StarWarsCard from "./StarWarsCard";
import axios from "axios";

function StarWarsList() {

    const [StarWarsData, setStarWarsData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results)
            setStarWarsData(response.data.results)
        })
        .catch(error => {
            console.log('Stop Wars', error)
        })
    }, [])

    return (
        <div className="characters">
            {StarWarsData.map(starwars => {
                return (
                    <StarWarsCard
                        key={starwars.id}
                        name={starwars.name}
                        height={starwars.height}
                        mass={starwars.mass}
                        hair_color={starwars.hair_color} 
                        skin_color={starwars.skin_color}
                        eye_color={starwars.eye_color}  
                    />
                )
            })}

        </div>
    );

}


export default StarWarsList;