import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// FontAwesome
import { FaHome } from "react-icons/fa"

// Styled Component
import styled from "styled-components"

function App() {
  return (
    <>
        <h1> <FaHome /> Techazon</h1>
        <Button>Click Me</Button>
    </>
  );
}

const Button = styled.button`
  background: var(--primary-color);
  color: var(--mainWhite);
  font-size: ${(props) => props.large ? "3rem" : "inherit"};
`

export default App;
