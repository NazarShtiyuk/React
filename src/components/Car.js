import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../store/car.slice";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;