import styled from 'styled-components'

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: 1px solid green;
height: 100vh;
`

export const Header = styled.div`
 border: 1px solid red;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 150px;
`

export const Icon = styled.span`
    font-size: 40px;
`

export const GifDiv = styled.div`
/* border: 1px solid blue;
 */width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
export const Gif = styled.img`
width: 250px;
height: 250px;
`