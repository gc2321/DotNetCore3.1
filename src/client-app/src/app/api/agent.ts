import axios, { AxiosResponse} from 'axios';
import { IItem } from '../models/item';
import { IFindItemsParam } from '../models/findItemsParam';

axios.defaults.baseURL = 'http://localhost:5000/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body:{}) => axios.post(url, body).then(responseBody)
};

const Items = {
    list:() : Promise<IItem[]> => requests.get('/todolist'),
    search: (param: IFindItemsParam) : Promise<IItem[]> => requests.post('/search', param)
}

export default {
    Items
}