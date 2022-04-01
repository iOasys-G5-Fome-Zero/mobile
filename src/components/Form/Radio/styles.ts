import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

interface PropsLabel {
  size: number;
}

export const Container = styled.View`
  width: 100%;
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`;

export const CheckButton = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const Check = styled.TouchableOpacity`
  width: ${width * 0.04}px;
  height: ${width * 0.04}px;
  border: 2px solid #c4c4c4;
  border-radius: ${(width * 0.04) / 2}px;
  z-index: -1;
`;

export const Label = styled.Text<PropsLabel>`
  font-size: ${({ size }) => RFValue(size)}px;
  justify-content: center;
  align-items: center;
`;
