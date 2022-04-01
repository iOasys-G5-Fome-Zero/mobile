import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ITextProps {
  size?: number;
  bold?: boolean;
}

const { width } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 7.5%;
`;

export const StyledText = styled.Text<ITextProps>`
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const StyledSaveLogin = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledSaveLoginText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${width * -0.04}px;
`;
