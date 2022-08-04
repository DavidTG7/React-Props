import { useState } from "react";
import { Box } from "./components/Box/Box";
import { Buttons } from "./components/Buttons/Buttons";


function App() {
  const [color, setColor] = useState('');
  const handleClick = (event) => {
    const value = event.target.value;
    setColor(value);
  }
  return (
    <>
      <Buttons handleClick={handleClick}/>
      <Box color={color} />
    </>
  );
}

export default App;
