 import React from "react";
import styled from "styled-components";

const Input = ({type, placeholder }) => {
  return (
    <Container>
     
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(54, 35, 129, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0.5rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Input;