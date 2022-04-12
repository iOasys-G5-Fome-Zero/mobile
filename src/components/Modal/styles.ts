import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledContentModal = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 20px;
  padding: 20px 16px;
`;

export const StyledBackgroundModal = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  margin-top: ${height * 0.08}px;
`;
