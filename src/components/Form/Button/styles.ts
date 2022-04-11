import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// types
interface IButtonProps {
  square: boolean;
  big: boolean;
}

interface ITextProps {
  size: number;
  fontColor: string;
}

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.TouchableOpacity<IButtonProps>`
  width: ${width * 0.5}px;
  height: ${height * 0.07}px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ big }) => (big ? 'space-between' : 'center')};
  background-color: ${({ theme, big }) => (big ? theme.colors.fourth : theme.colors.primary)};
  border-radius: ${({ square }) => (square ? '0px' : '5px')};
  border-width: ${({ big }) => (big ? '1px' : '0px')};
  border-color: ${({ big, theme }) => (big ? theme.colors.third : 'transparent')};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledButtonText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${props => RFValue(props.size)}px;
  color: ${({ theme, fontColor }) => fontColor || theme.colors.white};
  text-align: center;
`;
