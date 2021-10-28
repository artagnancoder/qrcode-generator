import React from "react";
import { Main, Icon, Header, GifDiv, Gif, Title, Subtitle, Get, Footer } from "./style";
import { BsArrowBarDown } from 'react-icons/bs';
import UrlGif from '../../assets/qrcode-gif.gif'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const HomePage = () => {
    return <Main>
        <Header>
            <Title> - Need a QR Code? - </Title>
            <Subtitle>Insert your url below</Subtitle>
            <Icon>
                <BsArrowBarDown />
            </Icon>
        </Header>
        <Get>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '50%',
                    backgroundColor: '#b3afa4',
                    borderRadius: '40px'
                }}
            >
               {/*  <TextField
                    fullWidth label="Url"
                    id="Url"
                 value={search}
                 onChange={setValue}
                /> */}
                
            </Box>
            <Stack spacing={2} direction="row" marginTop='15px'>

                <Button
                    variant="outlined"
                    onClick={() => console.log('CLICK')}
                >
                    Get it!</Button>
            </Stack>
        </Get>
        <GifDiv>
            <Gif src={UrlGif}></Gif>
        </GifDiv>

        <Footer>
            <h4>Created by @ <a href='https://www.linkedin.com/in/artagnan'>Igor Artagnan</a></h4>
            <h5>2021</h5>
        </Footer>

    </Main>
}

export default HomePage