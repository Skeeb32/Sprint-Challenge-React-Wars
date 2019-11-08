import React from "react";
import styled from "styled-components";

import {
    Card, CardText, CardBody,
    CardTitle, Col
  } from 'reactstrap';



  const CardStyle = styled.div `   
        color: purple;  
        background: yellow;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        transition: transform 0.2s ease-in;
         border: 5px solid black;
        &:hover {
          transform: translate(-5px) scale(1.05);
        }

        `;

  const NasaCard2 = styled.div `
      background: none;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
    
  `;

  const CardTitleSize = styled.h2 `
    font-size: 30px;

`;

const StarWarsCard = props => {



    return (
      
        <NasaCard2> 
    <Col xs="12" s="6" md="4">
          <Card>
          <CardStyle div key={props.id}>
            <CardBody>
              <CardTitleSize>Character: {props.name}</CardTitleSize>
              <CardText>Height: {props.height}</CardText>
              <CardTitle>Mass: {props.mass}</CardTitle>
              <CardTitle>Hair Color: {props.hair_color}</CardTitle>
              <CardTitle>Skin Color: {props.skin_color}</CardTitle>
            </CardBody>
          </CardStyle>
          </Card>
          </Col>
          </NasaCard2>
          
         
      );
    };



//     return (
//         <div key={props.id}>
//            <p>{props.name}</p>
//             <p>{props.height}</p>
//             <p>{props.mass}</p>
            
//         </div>
//     );

// }

export default StarWarsCard;