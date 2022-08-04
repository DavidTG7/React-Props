import { BoxColoured, MainBox } from "./Box.styles";

export const Box = ({color}) => {
 
  return (
    <MainBox>
      <BoxColoured style={{background: color}} />
    </MainBox>
  );
};
