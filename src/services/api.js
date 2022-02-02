
import axios from 'axios'

export const key="ac99a1ed788fe0c6ccbe4cd95dc9fab0269a18e0"

const api=axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':` Bearer ${key}`
    }
})

export default api