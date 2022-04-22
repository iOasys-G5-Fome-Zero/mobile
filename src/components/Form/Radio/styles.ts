import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

interface PropsLabel {
  size: number;
}

export const StyledContainer = styled.View`
  width: 100%;
`;

export const StyledContainerCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 3px;
`;

export const CheckButton = styled.TouchableOpacity`
  margin-bottom: ${height * 0.01}px;
`;

export const StyledBorderCheckBox = styled.TouchableOpacity`
  width: ${width * 0.05}px;
  height: ${width * 0.05}px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${(width * 0.05) / 2}px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const StyledCheckBox = styled.View`
  width: 80%;
  height: 80%;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Label = styled.Text<PropsLabel>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => RFValue(size)}px;
  margin-top: 5px;
`;

export const StyledLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${height * 0.01}px;
`;
