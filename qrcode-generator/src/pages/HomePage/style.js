import styled, { keyframes } from 'styled-components'

const morph = keyframes`
0% { opacity: 0;}
50% {opacity:0.5}
100% { opacity: 1; }
`

const slideIn = keyframes`
 from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`

const typing = keyframes`
 
  from { width: 0 }
  to { width: 100% }
}
 
`
export const Title = styled.h1`
margin-top: -76px;
position: absolute;
`

export const Subtitle = styled.h3`
position: absolute;
margin-top: -1px;
`

export const Icon = styled.span`
    font-size: 40px;
    margin-top: 90px;
    position: absolute;
`

export const Main = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100vh;
animation: ${morph} 1s linear 0.01s;
`

export const Header = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 150px;
animation: ${slideIn} 1s linear 0.01s;
`

export const GifDiv = styled.div`

margin-top: 15px;
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
export const Gif = styled.img`
width: 250px;
height: 250px;
`
export const Get = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
animation: ${morph} 1s linear 0.01s;
`

export const Footer = styled.div`
height: 145px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
animation: ${slideIn} 1s linear 0.01s;

a{
    text-decoration: none;
}

h5{
    position: absolute;
    margin-top: 51px;
}
`

export const Result = styled.div`
display: flex;
justify-content: center;
align-items: center;
animation: ${morph} 1s linear 0.01s;

`
export const ResultImg = styled.img`
width: 100vw;
height: 50vh;
`
export const NavResult = styled.div`

width: 331px;
display: flex;
justify-content: space-around;
margin-top: -123px;
position: absolute;
flex-direction: column;
height: 117px;
animation: ${slideIn} 1s linear 0.01s;
`

export const ResultTitle = styled.div`

 position: absolute;
 text-align: center;
 margin-top: -201px;
 width: 89vw;
 animation: ${slideIn} 1s linear 0.01s;

 @media (min-width: 900px){
  width: 23vw;

 }

`