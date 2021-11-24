import { TimeStyled } from "./styles";

type TimePropsType = {
  time: string;
  color?: string
};

export const Time: React.FC<TimePropsType> = ({ time, color }) => {
  return (
    <>
      <TimeStyled color={color}>{time}</TimeStyled>
    </>
  );
};