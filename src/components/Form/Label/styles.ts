import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

// types
interface IProps {
  size: number;
  color: string;
}

export const TextLabel = styled.Text<IProps>`
  font-family: ${props => props.theme.fonts.HEADLINE};
  font-size: ${({ size }) => RFValue(size)}px;
  color: ${({ color }) => color};
  margin-bottom: 5px;
  font-weight: 500;
`;
