import axios from 'axios'

const GetUrl = (setData, url, handleOpen) => {

    axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`)

        .then((res) => {
            setData(res.config.url)
            handleOpen()
        })
        .catch((err) => {
            console.log('DEU RUIM',err)
        })
}

export default GetUrl