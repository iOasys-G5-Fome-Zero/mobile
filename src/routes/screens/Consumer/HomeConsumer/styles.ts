import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface ITextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  textAlign?: string;
}

export const StyledContainer = styled.ScrollView`
  /* justify-content: flex-start; */
`;

export const StyledText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.HEADLINE};
  font-size: ${({ size }) => (size ? RFValue(size) : 14)}px;
  color: ${({ color, theme }) => (color ? `${color}` : theme.colors.black)};
  font-weight: ${({ bold }) => (bold ? '700' : 'normal')};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : 'left')};
`;

export const StyledSwiper = styled.ScrollView`
  margin-bottom: ${height * 0.025}px;
`;

export const StyledSwiperContent = styled.View`
  width: ${width}px;
  height: ${height * 0.25}px;
  padding: 0 20px;
`;

export const StyledSwiperImage = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const StyledCardSwiper = styled.TouchableOpacity``;

export const StyledMainContain = styled.View`
  width: 90%;
  align-self: center;
`;
