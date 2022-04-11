import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const CounterComponent = () => {
    const dispatch = useDispatch();
    // const counter = useSelector(state => state.counter);
    return (
        <h2 className='align-center'>
            <button onClick={() => dispatch({ type: "INCREMENT_ONE" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT_ONE" })}>-</button>
        </h2>);
}

export default CounterComponent;
