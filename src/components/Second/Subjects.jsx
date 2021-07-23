import React from 'react'
import styled from "styled-components";
import img from '../assets/Bg.png'

function Subjects(props) {
  return (
    <Card>
      <Cardbody>
        <img src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <input type="checkbox"></input>
      </Cardbody>
    </Card>
  );
}

const Card = styled.div`
border:solid 2px;
border-radius:10px;
border-color: #939b9e;

cursor: pointer;
transition: transform 200ms ease-in;

`;
const Cardbody = styled.div`
display: flex;
align-items: center;
flex-direction: row;
img{
    padding:3%;
    border-radius:10px;
    height: 100px;
    width: 100px;
    object-fit: cover;

}
h2{
font-size: 16px;
color: rgba(37, 37, 45, 1);

}
`;

export default Subjects
