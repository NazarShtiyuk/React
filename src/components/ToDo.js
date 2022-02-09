import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteToDo} from "../store/toDo.slice";

import css from './ToDo.module.css';

const ToDo = ({toDo: {id, toDo}}) => {

    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch()

    console.log(checked);
    return (
        <div className={css.tasks}>
            <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
            {!checked && <div>{toDo}</div>}
            {checked && <div className={css.textDecoration}>{toDo}</div>}
            <button onClick={() => dispatch(deleteToDo({id}))}>Delete</button>
        </div>
    );
};

export default ToDo;