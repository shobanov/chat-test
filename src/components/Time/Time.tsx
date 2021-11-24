import { TimeStyled } from "./styles";

interface IProps {
  time: string;
  isOwner: boolean;
};

export const Time: React.FC<IProps> = ({ time, isOwner }) => {
  return (
    <>
      <TimeStyled isOwner={isOwner}>{time}</TimeStyled>
    </>
  );
};