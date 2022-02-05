import React from 'react';

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'deleteCat', payload: {id}})}>Delete</button>
        </div>
    );
};

export default Cat;