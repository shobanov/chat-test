import { Time } from "../../../components/Time/Time";
import { ReceivedMessageContainer, Content, Text } from "./ReceivedMessageStyles";

type ReceivedMessagePropsType = {
  message: string;
  time: string;
};

export const ReceivedMessage: React.FC<ReceivedMessagePropsType> = ({ message, time }) => {
  return (
    <ReceivedMessageContainer>
      <Content>
        <Text>{message}</Text>
        <Time time={time} />
      </Content>
    </ReceivedMessageContainer>
  );
};