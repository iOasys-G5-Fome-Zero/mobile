import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll,
  StyledText as Text
} from '../HomeConsumer/styles';

import { StyledCircle as Circle } from '../MyBasketConsumerSignFood/styles';

const { height } = Dimensions.get('window');

interface ITextProps {
  margin?: boolean;
}

interface IContainerInfoProp {
  row?: boolean;
}

export const StyledContainer = styled(Container)``;

export const StyledContainerScroll = styled(Scroll)`
  padding: 40px 0;
  width: 90%;
`;
export const StyledText = styled(Text)<ITextProps>`
  margin-bottom: ${({ margin }) => (margin ? `${height * 0.025}px` : '0px')};
`;

export const StyledContainerInfo = styled.View<IContainerInfoProp>`
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 24px;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerCloseModal = styled.View`
  width: 90%;
  align-items: flex-end;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
`;

export const StyledCircle = styled(Circle)``;

export const StyledLoading = styled.ActivityIndicator``;
