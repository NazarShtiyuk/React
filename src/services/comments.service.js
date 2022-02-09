import axiosServiceUsersData from "./axios.service";
import {urlDataOfUsers} from "../configs/urls";

export const commentsService = {
    getAll: () => axiosServiceUsersData.get(urlDataOfUsers.comments).then(value => value.data)
}