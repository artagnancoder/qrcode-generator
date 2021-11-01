import React, { useState } from "react";
import axios from "axios";
import GetUrl from '../../services/GetUrl';
import { Main, Icon, Header, GifDiv, Gif, Title, Subtitle, Get, Footer, Result, ResultImg } from "./style";
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
    const handleClose = () => setOpen(false);

    const setValue = (e) => {
        setUrl(e.target.value)
    }

    const DownloadImg = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'Black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    return <Main>
        {console.log('url', url)}
        {console.log('data', data)}
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
            <Stack spacing={2} direction="row" marginTop='15px'>


                <Button
                    variant="outlined"
                    onClick={() => GetUrl(setData, url)}
                >
                    Get it!</Button>
            </Stack>
        </Get>


        {data ? <><Stack spacing={2} direction="row" marginTop='15px'> <Button variant="outlined" onClick={handleOpen}> YOUR CODE HERE</Button></Stack> <Stack spacing={2} direction="row" marginTop='15px'> <Button variant="outlined"
            onClick={() => window.location.reload()} > REFRESH</Button></Stack></> : <GifDiv>
            <Gif src={UrlGif}></Gif>
        </GifDiv>}

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 9 }}>
                    <Result>
                        <ResultImg src={data}></ResultImg>
                    </Result>
                    <Button
                        variant="outlined"
                        onClick={() => DownloadImg(data, 'qrcode.jpg')}
                    > DOWNLOAD </Button>

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