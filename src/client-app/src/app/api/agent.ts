import axios, { AxiosResponse} from 'axios';
import { IItem } from '../models/item';

axios.defaults.baseURL = 'http://localhost:5000/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody)
};

const Items = {
    list:() : Promise<IItem[]> => requests.get('/todolist')
}

export default {
    Items
}