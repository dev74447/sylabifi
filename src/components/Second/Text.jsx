import React from 'react'
import styled from "styled-components";
import Subjects from './Subjects'
import chem from '../assets/chem.png'
import phy from '../assets/phy.png'
import maths from '../assets/maths.png'
import bio from '../assets/bio.png'
import lr from '../assets/lr.png'
import others from '../assets/others.png'
function Text() {
  return (
    <Wrapper>
      <Subjects
      img={phy}
        title="Physics"

      />

      <Subjects
         img={chem}
        title="Chemistry"

      />

      <Subjects
      img={maths}
       title="Mathematics"
      />
      <Subjects
      img={bio}
        title="Biology"

      />

      <Subjects
      img={lr}
       title="Logical reasoning"

      />

      <Subjects
      img={others}
        title="Others"
      />

    </Wrapper>
  );
}
const Wrapper = styled.div` 
padding:3%;
 padding-left:3%;
 padding-right:3%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 30%));
    gap: 5%;
    justify-content: center;
  `;
export default Text
