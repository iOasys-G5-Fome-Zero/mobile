import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('window');

export const StyledContainer = styled.View`
  align-items: center;
`;

export const StyledContainerPickerFile = styled.TouchableOpacity`
  width: ${width * 0.5}px;
  height: ${height * 0.07}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
`;

export const StyledErrorMessage = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`;
