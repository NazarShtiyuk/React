import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../store/car.slice";
import Form from "../components/Form";
import Car from "../components/Car";

const CarsPage = () => {
    
    const {cars, status, error} = useSelector(state => state['carsReducer']);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCars())
    }, [])
    
    return (
        <div>
            <Form/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsPage;