import axios from "axios";

import baseURL from "../configs/urls";
import carURL from "../configs/car.url";

const axiosServiceUsersData = axios.create({baseURL});
export const axiosServiceCar = axios.create({baseURL: carURL});

export default axiosServiceUsersData