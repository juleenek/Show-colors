import { ColorBox } from './Components/ColorBox';
import AddColor from './Components/AddColor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('Empty Value');

  return (
    <main>
      <ColorBox />
      <AddColor />
    </main>
  );
}

export default App;