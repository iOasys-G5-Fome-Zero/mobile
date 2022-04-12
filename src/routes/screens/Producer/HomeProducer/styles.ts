import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
}

export const StyledContainer = styled.View`
  flex: 1;
`;

export const StyledContainerCestas = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  margin: 8px 20px;
  padding: 16px 16px;
`;

export const StyledButtonNext = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.third};
  border-radius: 3.75px;
  height: 72px;
  width: 320px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: ${height * 0.025}px;
`;
export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const StyledText = styled.Text`
  margin-bottom: 24px;
  font-size: ${RFValue(12)}px;
`;

export const StyledTitle = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  padding: 24px 20px;
`;
