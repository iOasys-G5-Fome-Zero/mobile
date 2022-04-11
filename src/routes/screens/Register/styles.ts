import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ITextProps {
  size?: number;
  bold?: boolean;
}

const { width } = Dimensions.get('window');

export const StyledContainer = styled.ScrollView`
  flex: 1;
  width: 85%;
  align-self: center;
  padding: 50px 0;
`;

export const StyledText = styled.Text<ITextProps>`
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const StyledSaveLogin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const StyledSaveLoginText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${width * -0.04}px;
`;
