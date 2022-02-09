import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addToDo} from "../store/toDo.slice";

const Form = () => {

    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const sendData = (data) => {
        dispatch(addToDo({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(sendData)}>
                <label>SomeToDo: <input type="text" {...register('toDo')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;