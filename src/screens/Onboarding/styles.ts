import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ITextProps {
  size?: number;
  bold?: boolean;
  title?: boolean;
}

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledImage = styled.Image`
  width: ${width}px;
  height: ${height * 0.5}px;
`;

export const StyledText = styled.Text<ITextProps>`
  text-align: center;
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, title }) => (title ? theme.colors.primary : theme.colors.black)};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;

export const StyledButtonNext = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 38px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 38px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerTextContain = styled.View`
  flex: 1;
  height: ${height * 0.6}px;
  justify-content: center;
  padding: 0 16px;
`;

export const StyledTitle = styled.Text``;
