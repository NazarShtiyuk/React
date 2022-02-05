import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const sendCat = (e) => {
        dispatch({type: 'addCat', payload: {cat: catInput.current.value}})
    }
    const sendDog = () => {
        dispatch({type: 'addDog', payload: {dog: dogInput.current.value}})
    }

    return (
        <div style={{margin: '0 auto', width: '250px'}}>
            <form onSubmit={form}>
                <h3>Enter a cat:</h3>
                <input type="text" ref={catInput}/>
                <button onClick={sendCat}>Send</button>
                <h3>Enter a dog:</h3>
                <input type="text" ref={dogInput}/>
                <button onClick={sendDog}>Send</button>
            </form>
        </div>
    );
};

export default Form;