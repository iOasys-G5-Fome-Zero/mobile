import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// components
import { Container, ErrorMessage, CheckButton, Check, Label } from './styles';

// types
interface IProps {
  options: string[];
  name: string;
  size?: number;
}

const Radio: React.FC<IProps> = ({ options, name, size = 18 }) => {
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
        backgroundColor: '#283036'
      }
    });
  };

  const handleCheck = (index: number, item: string) => {
    checkRefs.current.forEach(ref => {
      ref.checked = false;
      ref.setNativeProps({
        style: {
          backgroundColor: '#fff'
        }
      });
    });

    handleChange(index, item);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Container key={index}>
        {index === 0 && error && <ErrorMessage>{error}</ErrorMessage>}
        <CheckButton
          key={index.toString()}
          onPress={() => handleCheck(index, item)}
          style={{ paddingTop: index === 0 && error ? 10 : 0 }}
        >
          <Label size={size}>
            <Check
              ref={ref => {
                checkRefs.current[index] = ref;
              }}
            />{' '}
            {` ${item}`}
          </Label>
        </CheckButton>
      </Container>
    );
  };

  return <>{options.map((item, index) => renderItem({ item, index }))}</>;
};

export default Radio;
