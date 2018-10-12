import axios from 'axios'
import api from './API'
export const getUser = (): void => {
    axios.get(api.USER).then(res => {
        console.log(res)
    })
}
