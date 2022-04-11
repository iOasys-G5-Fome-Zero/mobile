/* eslint-disable react/jsx-no-undef */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { useField } from '@unform/core';
import { Icon } from 'react-native-elements';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { Container, InputContainer, TextInput, ErrorMessage } from './styles';

export interface IInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconType?: string;
  iconSize?: number;
  iconLeft?: boolean;
  iconColor?: string;
  name?: string;
  rawText?: string;
  onInitialData?: (text: string) => void;
  first?: boolean;
  maxLength?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<IInputProps> = ({
  containerStyle = {},
  viewStyle = {},
  iconName,
  iconSize = 20,
  iconType = 'feather',
  iconColor,
  name,
  onChangeText,
  rawText,
  onInitialData,
  first,
  secureTextEntry = false,
  maxLength = 50,
  placeholder = '',
  ...props
}) => {
  const [securityText, setSecurityText] = useState(secureTextEntry);
  const placeholderTraslateX = useSharedValue(0);
  const placeholderFontSize = useSharedValue(14);
  const placeholderOpacity = useSharedValue(1);
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    if (onInitialData) onInitialData(defaultValue);
  }, [defaultValue, onInitialData]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (rawText) return rawText;
        if (inputRef.current.value) return inputRef.current.value;
      },
      setValue(ref, value) {
        inputRef.current.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      clearValue() {
        if (inputRef.current.value) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      }
    });
  }, [fieldName, rawText, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  const handleFocus = useCallback(editing => {
    if (editing) {
      placeholderTraslateX.value = withTiming(-16, { duration: 100 });
      placeholderFontSize.value = withTiming(12, { duration: 100 });
      placeholderOpacity.value = withTiming(0.6, { duration: 100 });
    } else {
      placeholderTraslateX.value = withTiming(0, { duration: 100 });
      placeholderFontSize.value = withTiming(14, { duration: 100 });
      placeholderOpacity.value = withTiming(1, { duration: 100 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStylePlaceholder = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: placeholderTraslateX.value }],
      fontSize: placeholderFontSize.value,
      opacity: placeholderOpacity.value
    };
  });

  function renderIconLeft() {
    if (iconName) {
      return (
        <Icon
          type={iconType}
          name={iconName}
          style={{ marginRight: 8 }}
          size={iconSize}
          color={iconColor}
          tvParallaxProperties={undefined}
        />
      );
    }
  }

  function renderInput() {
    return (
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        maxLength={maxLength}
        autoCapitalize='none'
        defaultValue={defaultValue}
        secureTextEntry={securityText}
        onFocus={() => {
          handleFocus(true);
        }}
        onBlur={() => {
          if (inputRef.current.value === '') {
            handleFocus(false);
          }
        }}
        {...props}
        placeholder=''
      />
    );
  }

  return (
    <Container first={first} style={[viewStyle, {}]}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputContainer style={[containerStyle]}>
        {renderIconLeft()}
        {renderInput()}
        {secureTextEntry && (
          <Icon
            type='material-community'
            name={securityText ? 'eye' : 'eye-off'}
            size={20}
            color='#262626'
            onPress={() => setSecurityText(!securityText)}
            tvParallaxProperties={undefined}
          />
        )}
        <Animated.Text
          style={[
            { position: 'absolute', paddingLeft: 16, color: '#262626' },
            animatedStylePlaceholder
          ]}
        >
          {placeholder}
        </Animated.Text>
      </InputContainer>
    </Container>
  );
};

export default Input;
