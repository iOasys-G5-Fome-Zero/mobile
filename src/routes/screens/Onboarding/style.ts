import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ITextProps {
  size?: number;
  bold?: boolean;
}

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex: 1;
  padding: 69px 0px;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledImage = styled.Image`
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  z-index: -1;
`;
export const StyledText = styled.Text<ITextProps>`
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  text-align: center;
  margin-bottom: ${height * 0.025}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.whithe};
  font-size: ${RFValue(14)}px;
`;

export const StyledButtonNext = styled.View`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 16px;
  height: 38px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 16px;
  height: 38px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.Text``;
