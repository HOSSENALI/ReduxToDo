import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);
    const counter = useSelector(state => state.CounterReducer.counter);
    return (
        <div className='card card-body text-center p-4 mt-4 align-items-center'>

            {counter}

            <div>
                <button className='btn btn-secondary mr-2' onClick={() => dispatch({ type: "INCREMENT_ONE" })}>+</button>
                <button className='btn btn-secondary' onClick={() => dispatch({ type: "DECREMENT_ONE" })}>-</button>
            </div>

            <div className='form-inline mt-4 '>
                <div className='form-group'>
                    <input className='form-control' type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <button className="btn btn-info ml-2" onClick={() => dispatch({ type: "UPDATE", payload: number })}>Update</button>
                <button className='btn btn-dark ml-2' onClick={() => dispatch({ type: "INCREMENT_ONE", payload: number })}>Add</button>

            </div>
        </div>);
}

export default CounterComponent;
