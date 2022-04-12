import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
}

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerFinancial = styled.View`
  flex: 1;
`;

export const StyledContainerChaves = styled.View`
  flex: 1;
`;

export const StyledButtonNext = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.third};
  border-color: ${({ theme }) => theme.colors.secundary};
  border-width: 2px;
  border-radius: 4px;
  height: 49px;
  width: 360px;
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

export const StyledTitle = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 21)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  padding: 32px 24px;
`;
export const StyledText = styled.Text`
  margin-bottom: 24px;
  font-size: ${RFValue(28)}px;
  padding: 0px 24px;
  margin-top: ${width * -0.05}px;
`;

export const StyledTextChaves = styled.Text<ITextProps>`
  margin-bottom: 24px;
  font-size: ${RFValue(15)}px;
  padding: 0px 10px;
  margin-top: ${width * 0.04}px;
  margin-left: ${width * -0.47}px;
`;
