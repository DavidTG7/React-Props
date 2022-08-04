import { Button, MainButtons } from "./Buttons.styles"

export const Buttons = ( { handleClick } ) => {
  return (
    <MainButtons>
      <Button red>Red</Button>
      <Button>Green</Button>
    </MainButtons>
  );
}