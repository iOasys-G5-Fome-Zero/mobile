import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerForm = styled.ScrollView`
  width: 85%;
  padding-top: 40px;
`;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${height * 0.02}px;
`;
