import React, {useReducer} from 'react';
import Form from "./components/Form";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }
}


const App = () => {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    return (
        <div>
            <Form dispatch={dispatch}/>
            <div style={{width: '500px', margin: '0 auto', display: 'flex', justifyContent: 'space-between'}}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;