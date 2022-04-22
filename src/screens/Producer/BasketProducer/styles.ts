import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll,
  StyledText as Text
} from '../HomeProducer/styles';

interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
}

const { height } = Dimensions.get('window');

export const StyledContainer = styled(Container)``;
export const StyledContainerScroll = styled(Scroll)``;
export const StyledText = styled(Text)``;

export const StyledTitle = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
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
