import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll,
  StyledText as Text
} from '../HomeConsumer/styles';

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled(Container)``;
export const StyledContainerScroll = styled(Scroll)``;
export const StyledText = styled(Text)``;

export const StyledInputSearch = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.07}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${height * 0.07}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  margin: ${height * 0.03}px 0;
  padding: 0 20px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 10px;
`;

export const StyledContainerProducerMessage = styled.TouchableOpacity`
  width: ${width * 0.8}px;
  height: ${height * 0.1}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.lightGray};
`;
export const StyledPhoto = styled.View`
  width: ${height * 0.07}px;
  height: ${height * 0.07}px;
  justify-content: center;
  align-items: center;
  border-radius: ${height * 0.07}px;
  background-color: ${({ theme }) => theme.colors.circle};
  margin-right: 20px;
`;

export const StyledColum = styled.View`
  flex-direction: column;
`;
