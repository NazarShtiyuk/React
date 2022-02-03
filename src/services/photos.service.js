import {urls} from "../configs/urls";
import axiosService from "./axios.service"

const photosService = {
    getAll: () => axiosService.get(urls.photos).then(item => item.data)
}
export default photosService