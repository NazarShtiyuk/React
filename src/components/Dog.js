import React from 'react';

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'deleteDog', payload: {id}})}>Delete</button>
        </div>
    );
};

export default Dog;