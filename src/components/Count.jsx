import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>U clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Count;
