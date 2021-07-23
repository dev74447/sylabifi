import React from "react";
import styled from "styled-components";

const Input = ({ id, type, placeholder }) => {
  return (
    <Container>
      <label for={id}>{id}</label>
      <StyledInput
        placeholder={placeholder && placeholder}
        id={id}
        type={type ? type : "text"}
        // required
        autocomplete="off"
      />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  // border-radius: 4px;
  // margin: 0.5rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Input;