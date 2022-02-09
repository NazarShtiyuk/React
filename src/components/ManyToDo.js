import React from 'react';
import {useSelector} from "react-redux";
import ToDo from "./ToDo";

const ManyToDo = () => {

    const {toDo} = useSelector(state => state['toDoReducer'])

    return (
        <div>
            {toDo.map(value => <ToDo key={value.id} toDo={value}/>)}
        </div>
    );
};

export default ManyToDo;