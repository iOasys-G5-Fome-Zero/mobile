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
`;

export const StyledContainerCestas = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  margin: 8px 20px;
  padding: 14px 16px;
`;

export const StyledSaveCestas = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledSaveCestasTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 17px;
  font-weight: bold;
`;

export const StyledSaveCestasText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 8px;
  margin-left: 66px;
`;

export const StyledText = styled.Text`
  margin-bottom: 24px;
  font-size: ${RFValue(12)}px;
  padding: 0px 24px;
  margin-top: ${width * -0.05}px;
`;

export const StyledTitle = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  padding: 32px 24px;
`;
