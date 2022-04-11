import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
const CounterComponent = () => {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);
    return (
        <h2 className='align-center'>
            <button onClick={() => dispatch({ type: "INCREMENT_ONE" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT_ONE" })}>-</button><br />
            <input value={number} onChange={(e) => setNumber(e.target.value)}></input><br />
            <button onClick={() => dispatch({ type: "UPDATE", payload: number })}>Update</button>
            <button onClick={() => dispatch({ type: "INCREMENT_ONE", payload: number })}>Add</button>
        </h2>);
}

export default CounterComponent;
