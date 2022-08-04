import { Button, MainButtons } from "./Buttons.styles"

export const Buttons = ({ handleClick}) => {

 
  return (
    <MainButtons>
      <Button value='red' onClick={handleClick} red>Red</Button>
      <Button value='green' onClick={handleClick} green>Green</Button>
      <Button value='deepPink' onClick={handleClick} >Pink</Button>
      <Button value='lightblue' onClick={handleClick} lightblue>lightblue</Button>
    </MainButtons>
  );
}