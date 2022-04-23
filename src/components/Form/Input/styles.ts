import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

interface IProps {
  isFocused?: boolean;
  isFilled?: boolean;
  borderState?: boolean;
  first?: boolean;
}

export const Container = styled.View<IProps>`
  margin-bottom: ${height * 0.025}px;
`;

export const InputContainer = styled.View<IProps>`
  width: 100%;
  height: ${height * 0.07}px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.black};
  padding: 0px 16px;
`;

export const TextInput = styled.TextInput<IProps>`
  flex: 1;
  font-size: ${RFValue(14)}px;
  margin-top: 15px;
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 3px;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledPlaceholder = styled.Text``;
