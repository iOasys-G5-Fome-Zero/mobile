import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');

interface ITextProps {
  size: number;
  align?: boolean;
  bold?: boolean;
  color?: string;
}

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerForm = styled.ScrollView`
  width: 85%;
  padding-top: 40px;
`;

export const StyledText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ size }) => RFValue(size)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerWarning = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: 5px;
  padding: 16px 10px;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
`;

export const StyledCircle = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.circle};
  margin-bottom: ${height * 0.025}px;
`;

export const StyledContainerCloseModal = styled.View`
  width: 90%;
  align-items: flex-end;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledLoading = styled.ActivityIndicator``;
