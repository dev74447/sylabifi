import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { NavLink} from 'react-router-dom';
// import google from '../assets/google.png'
import Input from "./Input";

const Mains = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="h" />
        <h3>
          Company
        </h3>
      </LogoWrapper>
      <Form onSubmit="/">
        <h3>Register</h3>
        <label for="Name"> Name</label>
        <Input id="Name" type="text" placeholder=" Enter Full Name" />
        <label for="2"> Email</label>
        <Input id="2" type="email" placeholder="Email" />
        <label for="3"> Password</label>
        <Input id="3" type="password" placeholder="Password" />
        <label for="4"> Re-enter Password</label>
        <Input id="4" type="password" placeholder="Confrim Password" />
        <p>
          <button>
            <NavLink exact activeClassName="current" to='/about'>Sign Up</NavLink>
          </button>
          Already have an account?  <span> Login here</span>
        </p>
      </Form>
      <div>
        <Terms>
          Or Sign Up With
          <button>
            {/* <img src={google} alt=""/> */}
            Google

          </button>
        </Terms>
      </div>

    </Container>
  );
};


const Terms = styled.p`
color: #808080;
button{
border:none;
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #5e6c84;
background: #cbf2f2;
border-radius: 48px;

}
`;

const Form = styled.form`

 width: 100%;
  display: flex;
  flex-direction: column;
  justfy-content:spaced;
  padding-top:0;
  h3 {
    margin:0;
    padding:0;
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 25%;
    height: 40px;
    border: none;
    padding :2%;
    border-radius: 4px;
    background-color: #8759F2;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  p {
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #808080;
    
    font-weight: bold;
    font-size: 13px;
    span {
        padding:5px;
      color: #ff8d8d;
      cursor: pointer;
    }
`;

const LogoWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: row;
 img {  
height:40px;
width:40px;
 }
  h3 {
    color: #ff8d8d;
    font-size: 22px;

  }
`;

const Container = styled.div`

font-family:Roboto;
border-radius: 16px;
width:50%;
padding:5%;
padding-left:2%;
`;

export default Mains;