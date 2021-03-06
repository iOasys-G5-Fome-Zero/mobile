import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// interfaces
interface ITextProps {
  size?: number;
  bold?: boolean;
  link?: boolean;
}

const { height, width } = Dimensions.get('window');

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledContainerScroll = styled.ScrollView`
  width: 90%;
  padding: 40px 0;
`;

export const StyledTitle = styled.Text`
  font-size: ${RFValue(40)}px;
  margin-bottom: ${height * 0.2}px;
`;

export const StyledContainerForgotPassword = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledText = styled.Text<ITextProps>`
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, link }) => (link ? theme.colors.primary : theme.colors.black)};
`;

export const StyledSaveLogin = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledSaveLoginText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${width * -0.04}px;
`;

export const StyledContainerRegister = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const StyledErrorMessage = styled.Text`
  margin-bottom: 3px;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledLoading = styled.ActivityIndicator``;
