import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
  const {count, setcount} = useContext(COUNTER_CONTEXT)
  
  return (
    <div class="child">
      <h1>{count} <small>Child</small></h1>
      <div>
        <button onClick={()=>setcount(count - 1)} className='btn_1'>Decrement</button>
        <button onClick={()=>setcount((prevState)=>prevState +1)} className='btn_2'>Increment</button>
      </div>
    </div>
  );
};

export default Child;