import { createGlobalStyle } from 'styled-components';
import Router from './routes/Router'
import React from 'react'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';
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
const theme = createTheme({
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

    <GlobalStyle />
    <Router />

  </ThemeProvider>

}

export default App;
