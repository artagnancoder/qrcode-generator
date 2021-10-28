import React from "react";
import { Main, Icon, Header, GifDiv, Gif } from "./style";
import { BsArrowBarDown } from 'react-icons/bs';
import UrlGif from '../../assets/qrcode-gif.gif'
/* import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; */


const HomePage = () => {
    return <Main>
        <Header>
            <h1> - Need a QR Code? - </h1>
            <h3>Insert your url bellow</h3>
            <Icon>
                <BsArrowBarDown />
            </Icon>
        </Header>

        {/*   <Box
            sx={{
                width: 500,
                maxWidth: '50%',
                color: 'White'
            }}
        >
            <TextField
                fullWidth label="Url"
                id="Url"
            value={search}
            onChange={setValue} 
            />
        </Box> */}
        <GifDiv>
            <Gif src={UrlGif}></Gif>
        </GifDiv>

    </Main>
}

export default HomePage