import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementOtherCounter = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className='bg-white'>
      Count: {count}
      <button className='p-2 border-red-500 ' onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
      <br />
      Other Counter: {count2}
    </div>
  );
};

export default Counter;
