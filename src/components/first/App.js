import React from "react";
import styled from "styled-components";
import Pic from "./Pic";
import Main from "./Mains"


const App = () => {
  return (
    <Container>
      <Card>
       <Pic></Pic>
       <Main></Main>
      </Card>
    </Container>
  );
};

const Container = styled.div`
background: #e5e5e5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Card = styled.div`
position: absolute;
left: 20%;
right: 20%;
top: 10%;
bottom: 10%;
display:flex;
flex-flow:row-wrap;
box-shadow: 0px 24px 60px #6d6e6e;
border-radius: 16px;

`;
export default App;
