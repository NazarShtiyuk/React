import {axiosServiceCar} from "./axios.service";
import {urlCar} from "../configs/car.url";

export const carsService = {
    getAll: () => axiosServiceCar.get(urlCar.cars).then(value => value.data),
    createCar: (car) => axiosServiceCar.post(`${urlCar.cars}`, car).then(value => value.data),
    deleteCar: (id) => axiosServiceCar.delete(`${urlCar.cars}/${id}`)
}