import React from 'react'
import styled from "styled-components";
import Text from './Text';
import { NavLink } from 'react-router-dom';
const App = () => {
    return (
        <Container>
            <div>
                <Card>
                    <h1>What subjects do you specialise in?</h1>
                    <h5>you can add more than 1 subject</h5>
                    <Text />
                    <Priv>
                        <span> <NavLink exact activeClassName="current" to='/'>Previous</NavLink></span>
                    </Priv>
                    <Button>
                        <span> <NavLink exact activeClassName="current" to='/third'>Skip</NavLink></span>
                        <button> <NavLink exact activeClassName="current" to='/third'>Next</NavLink></button>
                    </Button>
                </Card>
            </div>
        </Container>
    )
}

const Container = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family:Roboto;
`;
const Card = styled.div`
position: absolute;
left: 10%;
right: 10%;
top: 10%;
bottom: 10%;
box-shadow: 0px 24px 60px #6d6e6e;
border-radius: 16px;
h1{
    margin-top:5%;
    margin-bottom:0;
    text-align:center;
    font-size: 28px;
}
h5{
    text-align:center;
    color: #828282;
    font-size: 16px;
}

`;
const Button = styled.div`
position: absolute;
right: 5%;
bottom: 5%;
button{  
    margin:5px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #8759F2;
    font-weight: 600;
    cursor: pointer;
}
span{
    margin:5px;
}
`;
const Priv = styled.div`
position: absolute;
left: 5%;
bottom: 5%;
`;
export default App
