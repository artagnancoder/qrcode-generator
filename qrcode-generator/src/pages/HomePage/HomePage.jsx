import React, { useState } from "react";
import axios from "axios";
import GetUrl from '../../services/GetUrl';
import { Main, Icon, Header, GifDiv, Gif, Title, Subtitle, Get, Footer, Result, ResultImg, NavResult, ResultTitle, style } from "./style";
import { BsArrowBarDown } from 'react-icons/bs';
import UrlGif from '../../assets/qrcode-gif.gif'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import fileDownload from 'js-file-download';

const HomePage = () => {

    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        window.location.reload()
    }

    const setValue = e => setUrl(e.target.value)

    const DownloadImg = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }

    return <Main>

        <Header>
            <Title>Need a QR Code?</Title>
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
                    height: 53,
                    textAlign: 'center'

                }}
            >
                <TextField
                    fullWidth label="URL"
                    id="Url"
                    value={url}
                    onChange={setValue}
                />

            </Box>
            <Stack spacing={2} direction="row" marginTop='15px' marginBottom='-17px'>

                <Button
                    variant="outlined"
                    onClick={() => GetUrl(setData, url, handleOpen)}
                >
                    Get it!</Button>
            </Stack>
        </Get>

        {data ? <><Stack spacing={2} direction="row" marginTop='15px'> </Stack> <Stack spacing={2} direction="row" marginTop='15px'></Stack></> : <GifDiv>
            <Gif src={UrlGif} alt='QR code gif'></Gif>
        </GifDiv>}

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 25 }}>

                    <ResultTitle>
                        <h1>Done!</h1>
                    </ResultTitle>
                    <NavResult>
                        <Button
                            variant="outlined"
                            onClick={() => DownloadImg(data, 'qrcode.jpg')}
                        > DOWNLOAD </Button>

                        <Button
                            variant="outlined"
                            onClick={handleClose}
                        > CLOSE </Button>
                    </NavResult>

                    <Result>
                        <ResultImg src={data}></ResultImg>
                    </Result>

                </Typography>
            </Box>
        </Modal>

        <Footer>
            <h4>Created by @  <a href='https://www.linkedin.com/in/artagnan'> Igor Artagnan </a> </h4>
            <h5>2021</h5>
        </Footer>

    </Main>
}

export default HomePage