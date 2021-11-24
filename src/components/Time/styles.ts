import styled from 'styled-components';

interface IProps {
  isOwner: boolean;
};

export const TimeStyled = styled.span<IProps>`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 79px;
  color: ${props => props.isOwner ?
"#14FF72" : "#DFDFDF"};
`;