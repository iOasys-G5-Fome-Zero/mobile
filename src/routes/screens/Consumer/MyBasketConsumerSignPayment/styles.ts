import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  StyledContainerForm as Scroll,
  StyledText as Text,
  StyledRow as Row,
  StyledContainerCloseModal as ContainerCloseModal,
  StyledCircle as Circle
} from '../MyBasketConsumerSignFood/styles';

const { height } = Dimensions.get('window');

interface IPropsRow {
  between?: boolean;
}

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(21)}px;
  font-weight: bold;
  margin-bottom: ${height * 0.025}px;
`;

export const StyledBox = styled.View`
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 16px 16px;
  margin: ${height * 0.025}px 0px;
`;

export const StyledButton = styled.TouchableOpacity``;

export const StyledRow = styled(Row)<IPropsRow>`
  justify-content: ${({ between }) => (between ? 'space-between' : 'flex-start')};
`;
export const StyledContainerForm = styled(Scroll)``;
export const StyledText = styled(Text)``;
export const StyledContainerCloseModal = styled(ContainerCloseModal)``;
export const StyledCircle = styled(Circle)``;
