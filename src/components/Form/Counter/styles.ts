import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.View`
  height: ${height * 0.1}px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  margin-bottom: ${height * 0.02}px;
`;

export const StyledContinerInfo = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

export const StyledImage = styled.View`
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
`;

export const StyledColumn = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
`;

export const StyledCounterBox = styled.View`
  height: ${height * 0.04}px;
  width: ${width * 0.22}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: ${height * 0.02}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0px 10px;
`;

export const StyledButton = styled.TouchableOpacity``;

export const StyledLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;
