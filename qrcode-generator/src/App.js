import { createGlobalStyle, withTheme } from 'styled-components';
import HomePage from './pages/HomePage/HomePage';
import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@mui/material/colors';

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
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inconsolata'
  },
  palette: {
    primary: {
      main: '#f7f7f7'
    },
    secondary: green
  }
})

const App = () => {
  return <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  </ThemeProvider>

}

export default App;
