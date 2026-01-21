import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: 'purple' }}>Counter: {count}</h2>
      <button style={{ margin: '5px', padding: '5px 10px' }} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ margin: '5px', padding: '5px 10px' }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={{ margin: '5px', padding: '5px 10px' }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
