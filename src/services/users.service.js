import {urlDataOfUsers} from "../configs/urls";
import axiosServiceUsersData from "./axios.service";

export const usersService = {
    getAll: () => axiosServiceUsersData.get(urlDataOfUsers.users).then(value => value.data)
}