import React, { useState, useCallback, forwardRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import { RFValue } from 'react-native-responsive-fontsize';

// types
import Input, { IInputProps } from '../Input/Input';

interface IProps extends IInputProps {
  type: TextInputMaskTypeProp;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
  options?: any;
  size?: number;
}

const InputMask: React.ForwardRefRenderFunction<IProps, IProps> = (
  { type, options, size = 14, ...rest },
  inputRef
) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      style={{ fontSize: RFValue(size) }}
      type={type}
      options={options}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText
      }}
      {...rest}
    />
  );
};
export default forwardRef(InputMask);
