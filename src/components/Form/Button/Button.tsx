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
  big?: boolean;
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
  big = false,
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
    <StyledContainer {...{ square, style }} onPress={onPressButton} big={big}>
      <StyledButtonText {...{ size, fontColor }}>{children}</StyledButtonText>
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
    </StyledContainer>
  );
};

export default Button;
