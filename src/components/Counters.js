import React, {useReducer} from 'react';

    const reducer = (count, action) => {
        switch (action.type) {
            case 'inc1':
                return {...count, count1: count.count1 + 1}
            case 'dec1':
                return {...count, count1: count.count1 - 1}
            case 'reset1':
                return {...count, count1: 0}
            case 'inc2':
                return {...count, count2: count.count2 + 1}
            case 'dec2':
                return {...count, count2: count.count2 - 1}
            case 'reset2':
                return {...count, count2: 0}
            case 'inc3':
                return {...count, count3: count.count3 + 1}
            case 'dec3':
                return {...count, count3: count.count3 - 1}
            case 'reset3':
                return {...count, count3: 0}
            default:
                throw new Error('Error')
        }
    }

const Counters = () => {

    const [count, dispatch] = useReducer(reducer, {count1:0, count2:0, count3:0})

    return (
        <div>
            <h2>Count1</h2>
            <div>{count.count1}</div>
            <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
            <hr/>
            <h2>Count2</h2>
            <div>{count.count2}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
            <hr/>
            <h2>Count3</h2>
            <div>{count.count3}</div>
            <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
        </div>
    );
};

export default Counters;