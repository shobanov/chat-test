import { TimeStyled } from "./styles";

type TimePropsType = {
  time: string;
};

export const Time: React.FC<TimePropsType> = ({ time }) => {
  return (
    <>
      <TimeStyled>{time}</TimeStyled>
    </>
  );
};