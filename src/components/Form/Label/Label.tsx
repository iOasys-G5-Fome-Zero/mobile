import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// components
import { TextLabel } from './styles';

// types
interface IProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  size?: number;
  color?: string;
}

const Label: React.FC<IProps> = ({ title, size = 14, color = '#262626', containerStyle = {} }) => {
  return (
    <TextLabel color={color} size={size} style={[containerStyle, {}]}>
      {title}
    </TextLabel>
  );
};

export default Label;
