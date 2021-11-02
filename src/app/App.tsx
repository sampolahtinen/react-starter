import React, { useState } from 'react';
import Button from '../components/Button';

const App = () => {
  const [color, setColor] = useState('black');

  return (
    <>
      <h1 style={{ color }}>12333HELLO222</h1>
      <Button onClick={() => setColor('red')}>change color</Button>
    </>
  );
};

export default App;
