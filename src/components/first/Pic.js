import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/Bg.png';

const Pic = () => {
    return (
        <Container>
            <Wrapper>
            </Wrapper>
        </Container>
    )
}
const Container =styled.div `
padding:2%;
height:auto;
width:60%;
display:flex;
border-radius: 8px;
`;
const Wrapper = styled.div`

background-image: url(${bgImg});
background-position: center;
background-size:cover ;
background-repeat: no-repeat;
width: 100%;
height: 100%;
display: flex;
border-radius: 8px;
`;
export default Pic
