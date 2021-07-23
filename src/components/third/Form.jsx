import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Form = () => {
    return (
        <Container>
            <Header>
                <label><input type="Text" placeholder="eg. john doe" />Set your username*</label>
                <label><input type="number" placeholder="0" />Set your daily hours*</label>
            </Header>

            <h3>choose your preferred language</h3>
            <Body>
                <label><input type="checkbox" />English</label>
                <label><input type="checkbox" />Telugu</label>
                <label><input type="checkbox" />French</label>
                <label><input type="checkbox" />Hindi</label>
                <label><input type="checkbox" />Tamil</label>
                <label><input type="checkbox" />German</label>
                <label><input type="checkbox" />Marathi</label>
                <label><input type="checkbox" />Spanish</label>
                <label><input type="checkbox" />Russian</label>
            </Body>
            <Footer>
                Do you have pen-tablet/i-pad with stylus/android tablet with stylus ?
                <button>YES</button>
                <button>NO</button>
            </Footer>

        </Container>
    );
};


const Header = styled.div`
margin-top:0px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(40%, 40%));
gap: 5%;
justify-content: center;

`;
const Footer = styled.div`
padding:2%;
diaplay:flex;
button{
    margin:10px;
 color: rgba(135, 89, 242, 1);
    background:white;
    border:solid 2px;
    border-radius:4px;

}
button:hover {
    background:#eee;
    cursor:pointer;
   }

`;
const Body = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(30%, 30%));
gap: 2%;
justify-content: center;
`;

const Container = styled.div`

font-family:Roboto;
border-radius: 16px;
padding:10%;
label {
    border:1px solid #ccc;
    padding:10px;
    margin:0 0 10px;
    display:block; 
   }
   
   label:hover {
    background:#eee;
    cursor:pointer;
   }

   h3{
       padding-left:5%;
   }
`;

export default Form;