import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.SafeAreaView`
  width: ${width}px;
  height: ${height * 0.08}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secundary};
  margin-top: ${StatusBar.currentHeight}px;
  padding: 0 20px;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(24)}px;
`;
