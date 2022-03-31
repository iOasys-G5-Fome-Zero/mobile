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
  iconName?: string;
  iconType?: string;
  iconColor?: string;
  iconSize?: number;
  addPhoneSize?: boolean;
}

const Button: React.FC<IProps> = ({
  onPress,
  square,
  children,
  style,
  size = 20,
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
      <StyledButtonText {...{ size }}>{children}</StyledButtonText>
    </StyledContainer>
  );
};

export default Button;
