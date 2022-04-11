import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll
} from '../MyBasketConsumerSignFood/styles';

const { height } = Dimensions.get('window');

export const StyledContainer = styled(Container)``;

export const StyledContainerScroll = styled(Scroll)``;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${height * 0.02}px;
`;
