import {urls} from "../configs/urls";
import axiosService from "./axios.service";

const usersService = {
    getAll: () => axiosService.get(urls.users).then(item => item.data)
}
export default usersService