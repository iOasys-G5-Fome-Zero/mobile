import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll,
  StyledText as Text
} from '../HomeConsumer/styles';

const { height } = Dimensions.get('window');

export const StyledContainer = styled(Container)``;

export const StyledContainerScroll = styled(Scroll)`
  width: 90%;
  padding: 40px 0;
`;
export const StyledText = styled(Text)`
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerWarning = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: 5px;
  padding: 16px 10px;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
`;

export const StyledCircle = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.circle};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerCloseModal = styled.View`
  width: 90%;
  align-items: flex-end;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledLoading = styled.ActivityIndicator``;
