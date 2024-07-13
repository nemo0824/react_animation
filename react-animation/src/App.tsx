import React from 'react';
import {motion} from "framer-motion"
import styled from 'styled-components';
import { start } from 'repl';
import { hover } from '@testing-library/user-event/dist/hover';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  
`

const Box = styled(motion.div)`
width: 200px;
height: 200px;
background-color: white; 
border-radius : 40px; 
box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba;
display: grid;
grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  place-self: center;
`

const boxVariation = {
  hover: {scale: 1.5, rotateZ: 90},
  click: {borderRadius:"100px", scale: 1}
}

// const circleVariation ={
//   start: {opacity: 0, y: 10},
//   end: {opacity: 1, y: 0}
// }

function App() {
  return (
   <Wrapper>
    <Box drag variants={boxVariation} whileHover="hover" whileTap="click"/> 
   </Wrapper>
  );
}

export default App;
