import { ReceivedMessageContainer, Content, Time, Text } from "./ReceivedMessageStyles";

type ReceivedMessagePropsType = {
  message: string;
  date: string;
};

const ReceivedMessage: React.FC<ReceivedMessagePropsType> = ({ message, date }) => {
  return (
    <ReceivedMessageContainer>
      <Content>
        <Text>{message}</Text>
        <Time>{date}</Time>
      </Content>
    </ReceivedMessageContainer>
  );
};

export default ReceivedMessage;