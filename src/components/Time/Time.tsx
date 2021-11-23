import { TimeStyled } from "./styles";

type ReceivedMessagePropsType = {
  time: string;
};

export const Time: React.FC<ReceivedMessagePropsType> = ({ time }) => {
  return (
    <>
      <TimeStyled>{time}</TimeStyled>
    </>
  );
};