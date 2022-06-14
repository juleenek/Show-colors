import { ColorBox } from './Components/ColorBox';
import { AddColor } from './Components/AddColor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <main>
      <ColorBox color={color} />
      <AddColor color={color} setColor={setColor} />
    </main>
  );
}

export default App;
