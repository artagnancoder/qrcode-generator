import { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage/HomePage';
import React from 'react'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
    color: white;

  }
  body{
    background-color: #121212;
  }
`
const App = () => {
  return <div>
    <GlobalStyle />
    <HomePage />
  </div>

}

export default App;
