import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import GetUrl from '../../services/GetUrl';
import { Main, Icon, Header, GifDiv, Gif, Title, Subtitle, Get, Footer } from "./style";
import { goToResult } from '../../routes/Coordinator'
import { BsArrowBarDown } from 'react-icons/bs';
import UrlGif from '../../assets/qrcode-gif.gif'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const HomePage = () => {

    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    const history = useHistory()

    const setValue = (e) => {
        setUrl(e.target.value)
    }

    return <Main>
        {console.log('url', url)}
        {console.log('data', data)}
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
                    maxWidth: '90%',
                    backgroundColor: '#b3afa4',
                    height: 30

                }}
            >
                <TextField
                    fullWidth label="URL"
                    id="Url"
                    value={url}
                    onChange={setValue}
                />

            </Box>
            <Stack spacing={2} direction="row" marginTop='15px'>

                <Button
                    variant="outlined"
                    onClick={() => GetUrl(setData, url)/* ,  goToResult(history, data) */}
                >
                    Get it!</Button>
            </Stack>
        </Get>
        <GifDiv>
            <Gif src={UrlGif}></Gif>
        </GifDiv>

        <Footer>
            <h4>Created by @  <a href='https://www.linkedin.com/in/artagnan'> Igor Artagnan </a> </h4>
            <h5>2021</h5>
        </Footer>

    </Main>
}

export default HomePage