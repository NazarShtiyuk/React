import axiosServiceUsersData from "./axios.service";
import {urlDataOfUsers} from "../configs/urls";

export const postsService = {
    getAll: () => axiosServiceUsersData.get(urlDataOfUsers.posts).then(value => value.data)
}