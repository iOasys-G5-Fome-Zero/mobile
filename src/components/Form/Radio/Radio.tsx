import React, { useEffect, useRef } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { useField } from '@unform/core';

// components
import {
  StyledContainer,
  ErrorMessage,
  CheckButton,
  StyledBorderCheckBox,
  StyledCheckBox,
  Label,
  StyledContainerCheck,
  StyledLine
} from './styles';

// types
interface IProps {
  options: string[];
  name: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  descriptions?: string[];
  backLine?: boolean;
}

const Radio: React.FC<IProps> = ({
  options,
  name,
  size = 18,
  containerStyle = {},
  descriptions = [],
  backLine = false
}) => {
  const checkRefs = useRef([]);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkRefs,
      getValue: ref => {
        const found = ref.current.find((refC: any) => refC.checked);

        return found ? found.value : '';
      },
      setValue: (ref, value: string) => {
        const index = options.indexOf(value);

        if (ref.current[index] && value) {
          handleChange(index, value);
        }
      }
    });
  });

  useEffect(() => {
    if (defaultValue && checkRefs.current) {
      const i = options.indexOf(defaultValue);
      if (i >= 0) {
        handleChange(i, defaultValue);
      }
    }
  }, [defaultValue, options]);

  const handleChange = (index: number, item: string) => {
    checkRefs.current[index].checked = true;
    checkRefs.current[index].value = item;
    checkRefs.current[index].setNativeProps({
      style: {
        backgroundColor: '#00843F'
      }
    });
  };

  const handleCheck = (index: number, item: string) => {
    checkRefs.current.forEach(ref => {
      ref.checked = false;
      ref.setNativeProps({
        style: {
          backgroundColor: '#FFFFFF'
        }
      });
    });

    handleChange(index, item);
  };

  const renderItem = ({ item, index }) => {
    return (
      <StyledContainer key={index} style={[containerStyle, {}]}>
        {index === 0 && error && <ErrorMessage>{error}</ErrorMessage>}
        <CheckButton
          key={index.toString()}
          onPress={() => handleCheck(index, item)}
          style={{ paddingTop: index === 0 && error ? 10 : 0 }}
        >
          <StyledContainerCheck>
            <StyledBorderCheckBox>
              <StyledCheckBox
                ref={ref => {
                  checkRefs.current[index] = ref;
                }}
                style={{
                  width: '80%',
                  height: '80%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: '#FFFF'
                }}
              />
            </StyledBorderCheckBox>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Label size={size}>{`${item}`}</Label>
              {descriptions[index] && <Label size={12}>{descriptions[index]}</Label>}
            </View>
          </StyledContainerCheck>
        </CheckButton>
      </StyledContainer>
    );
  };

  return (
    <>
      {options.map((item, index) => {
        if (backLine) {
          return (
            <>
              {renderItem({ item, index })}
              <StyledLine />
            </>
          );
        }

        return renderItem({ item, index });
      })}
    </>
  );
};

export default Radio;
