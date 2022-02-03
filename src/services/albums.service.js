import {urls} from "../configs/urls";
import axiosService from "./axios.service";


const albumsService = {
    getAll: () => axiosService.get(urls.albums).then(item => item.data)
}
export default albumsService