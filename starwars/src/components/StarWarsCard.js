import React from "react";

const StarWarsCard = props => {

    return (
        <div key={props.id}>
           <p>{props.name}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
            
        </div>
    );

}

export default StarWarsCard;