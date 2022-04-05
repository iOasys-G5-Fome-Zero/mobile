import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IPropsText {
  bold?: boolean;
}

export const StyledRouteView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: ${StatusBar.currentHeight}px;
  width: 100%;
  height: 55px;
  background-color: #262626;
`;

export const StyledContainerRoute = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 70%;
  height: 80%;
  border-radius: 10px;
  padding: 0 10px;
`;

export const StyledContentRoute = styled.View`
  flex-direction: column;
  width: 90%;
  margin-left: 5px;
`;

export const StyledText = styled.Text<IPropsText>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${RFValue(14)}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: center;
`;
