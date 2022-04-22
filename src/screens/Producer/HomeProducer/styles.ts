import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
}

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledContainerScroll = styled.ScrollView`
  width: ${width * 0.9}px;
  padding: 40px 0;
`;

export const StyledText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerCestas = styled.View`
  width: ${width * 0.9}px;
  height: auto;
  align-self: center;
  background-color: transparent;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.gray};
  padding: 16px;
`;

export const StyledBigButton = styled.TouchableOpacity`
  height: ${height * 0.12}px;
  width: ${width * 0.9}px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.fourth};
  border: 1px solid ${({ theme }) => theme.colors.third};
  border-radius: 5px;
  margin-bottom: ${height * 0.025}px;
`;
export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  font-weight: 600;
`;

export const StyledTitle = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  padding: 24px 20px;
`;
