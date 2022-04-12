import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// types
interface IProps {
  size: number;
}

const { width } = Dimensions.get('window');

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const ContainerOptions = styled.View``;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

export const CheckBox = styled.View`
  width: ${width * 0.05}px;
  height: ${width * 0.05}px;
  align-items: center;
  justify-content: center;
  border: 1.2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${(width * 0.02) / 2}px;
  margin: 3px 8px 0 0;
`;

export const Label = styled.Text<IProps>`
  font-size: ${({ size }) => RFValue(size)}px;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 3px;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`;
