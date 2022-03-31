/* eslint-disable react/jsx-no-undef */
import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

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
  maxLength = 50,
  ...props
}) => {
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
        placeholder={error}
        onFocus={() => !!error}
        {...props}
      />
    );
  }

  return (
    <Container first={first} style={[viewStyle, {}]}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputContainer style={[containerStyle]}>
        {renderIconLeft()}
        {renderInput()}
      </InputContainer>
    </Container>
  );
};

export default Input;
