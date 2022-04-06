import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// types
interface IButtonProps {
  square: boolean;
}

interface ITextProps {
  size: number;
}

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.TouchableOpacity<IButtonProps>`
  width: ${width * 0.5}px;
  height: ${height * 0.07}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ square }) => (square ? 0 : (height * 0.04) / 2)}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${height * 0.025}px;
  justify-content: center;
`;

export const StyledButtonText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${props => RFValue(props.size)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
