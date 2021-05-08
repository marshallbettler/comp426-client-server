//AIzaSyDP-moiuedfcV12DUMFmF6Rn0TC3wiPAIs
import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1',
    params: {
        key: "AIzaSyDP-moiuedfcV12DUMFmF6Rn0TC3wiPAIs",
        cx: "b6b656ad12a723736",
    },
    headers:{}
})
