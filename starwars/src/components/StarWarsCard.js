import React, { useState }from "react";
import styled from "styled-components";

import {
    Card, CardText, CardBody,
    CardTitle, Col
  } from 'reactstrap';

  import { Button, Fade } from 'reactstrap';

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
    const [fadeIn, setFadeIn] = useState(true);
    const toggle = () => setFadeIn(!fadeIn);

    return (
      
        <NasaCard2> 
    <Col xs="12" s="6" md="4">
          <Card>
          <CardStyle div key={props.id}>
            <CardBody>
            <Button color="primary" onClick={toggle}>{props.name}</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
              <CardTitleSize>Character Data</CardTitleSize>
              <CardText>Height: {props.height}</CardText>
              <CardTitle>Mass: {props.mass}</CardTitle>
              <CardTitle>Hair Color: {props.hair_color}</CardTitle>
              <CardTitle>Skin Color: {props.skin_color}</CardTitle>
              <CardTitle>Eye Color: {props.eye_color}</CardTitle>
              </Fade>
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