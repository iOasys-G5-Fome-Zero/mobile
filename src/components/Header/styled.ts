import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

interface IPropsText {
  iconLeft?: boolean;
  size?: number;
}

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

export const StyledText = styled.Text<IPropsText>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => RFValue(size)}px;
  margin-left: ${({ iconLeft }) => (iconLeft ? '0' : '10px')};
`;

export const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const StyledHeaderProfile = styled.View`
  width: 100%;
  height: ${height * 0.15}px;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-top: -1px;
`;

export const StyledDefaultPhoto = styled.View`
  width: 110px;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  background-color: ${({ theme }) => theme.colors.circle};
  align-self: center;
  margin-top: -70px;
`;

export const StyledButtonEditProfile = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: -5px;
  width: 32px;
  height: 32px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.circleSecunday};
  align-items: center;
  justify-content: center;
`;

export const StyledBaseButton = styled.TouchableOpacity``;
