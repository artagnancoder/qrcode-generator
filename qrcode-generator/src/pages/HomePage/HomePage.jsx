import React from "react";
import { Main, Icon, Header, GifDiv, Gif, Title, Subtitle } from "./style";
import { BsArrowBarDown } from 'react-icons/bs';
import UrlGif from '../../assets/qrcode-gif.gif'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const HomePage = () => {
    return <Main>
        <Header>
            <Title> - Need a QR Code? - </Title>
            <Subtitle>Insert your url below</Subtitle>
            <Icon>
                <BsArrowBarDown />
            </Icon>
        </Header>

        <Box
            sx={{
                width: 500,
                maxWidth: '50%',
                backgroundColor: 'White'
            }}
        >
            <TextField
                fullWidth label="Url"
                id="Url"
               /*  value={search}
                onChange={setValue} */
            />
        </Box>
        <GifDiv>
            <Gif src={UrlGif}></Gif>
        </GifDiv>

    </Main>
}

export default HomePage