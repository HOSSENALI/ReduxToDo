import React from 'react'
import { useSelector } from 'react-redux';
const TestCounterHit = () => {
    
    const counter = useSelector(state => state.counter);
    return ( 
        <>{counter}</>
     );
}
 
export default TestCounterHit;