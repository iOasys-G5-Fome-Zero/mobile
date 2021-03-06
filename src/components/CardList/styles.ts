import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IImageProps {
  columns?: number;
}

interface ICardTitle {
  size?: number;
}

const { width, height } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${height * 0.05}px;
  margin-top: ${height * 0.025}px;
`;

export const StyledText = styled.Text``;

export const StyledCardContainer = styled.TouchableOpacity<IImageProps>`
  width: ${({ columns }) => (columns ? `${(width * 0.9) / columns - 10}px` : '100%')};
  height: ${({ columns }) => (columns ? `${(width * 0.9) / columns - 10}px` : '100%')};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledCardImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

export const StyledCardTitle = styled.Text<ICardTitle>`
  width: 70%;
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
`;

export const StyledContainerBackgroundBarProgress = styled.View`
  width: 100%;
  height: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.circleSecunday};
  margin-top: 8px;
`;

export const StyledContainerBarProgress = styled.View``;
