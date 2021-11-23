import { InputButton } from "./styles";

type PropsType = {
  type?: string; 
};

export const IconButton: React.FC<PropsType> = ({ type }) => {
  return (
    <>
      <InputButton alt="send" type={type}/>
    </>
  );
};