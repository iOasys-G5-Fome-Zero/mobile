import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IContainerInfoProp {
  row?: boolean;
}

interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
  margin?: boolean;
}

const { height } = Dimensions.get('window');

export const StyledContainerInfo = styled.View<IContainerInfoProp>`
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 24px;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
  margin-bottom: ${({ margin }) => (margin ? `${height * 0.025}px` : '0px')};
`;
