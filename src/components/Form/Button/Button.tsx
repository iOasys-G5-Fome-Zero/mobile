import React from 'react';
import { Keyboard, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

// components
import { StyledButtonText, StyledContainer } from './styles';

// types
interface IProps {
  onPress: () => void;
  square?: boolean;
  style?: ViewStyle;
  size?: number;
  fontColor?: string;
  iconName?: string;
  iconType?: string;
  iconColor?: string;
  iconSize?: number;
}

const Button: React.FC<IProps> = ({
  onPress,
  square,
  children,
  style,
  size = 20,
  fontColor = '#fff',
  iconName,
  iconType,
  iconColor,
  iconSize
}) => {
  const onPressButton = () => {
    Keyboard.dismiss();
    onPress();
  };

  return (
    <StyledContainer {...{ square, style }} onPress={onPressButton}>
      {iconName && (
        <Icon
          name={iconName}
          type={iconType}
          color={iconColor}
          size={iconSize}
          style={{}}
          tvParallaxProperties={undefined}
        />
      )}
      <StyledButtonText {...{ size, fontColor }}>{children}</StyledButtonText>
    </StyledContainer>
  );
};

export default Button;
