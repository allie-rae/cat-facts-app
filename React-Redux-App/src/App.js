import React from 'react';
import Nav1 from './components/Nav';
import './App.css';
import GenerateFact from './components/GenerateFact';
import styled from 'styled-components';

const StyledH1 = styled.h1`
font-family: 'indie flower';
margin: 2%;
`

function App() {
  return (
    <div className="App">
      <Nav1 />
      <StyledH1>Cat Facts App</StyledH1>
      <GenerateFact />
    </div>
  );
}

export default App;
