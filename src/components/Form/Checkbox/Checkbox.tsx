import React, { useRef, useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';
import { Icon } from 'react-native-elements';

// components
import { CheckBox, Label, OptionButton, ErrorMessage, Container, ContainerOptions } from './styles';

// types
interface IProps {
  name: string;
  options: string[];
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<IProps> = ({ name, options = [], size = 18, containerStyle = {} }) => {
  const checkRefs = useRef([]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const { error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkRefs,
      getValue: () => {
        return checkedOptions;
      },
      setValue: (ref, value) => {
        if (value) {
          value.forEach(item => {
            const index = options.indexOf(item);
            if (ref.current[index]) {
              handleCheck(index, item);
            }
          });
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedOptions, fieldName, registerField]);

  const handleCheckOptions = () => {
    const array = [];
    let index = 0;
    checkRefs.current.forEach(ref => {
      if (ref.checked) {
        array.push(ref.value);
        setCheckedOptions(array);
        index += 1;
      }
    });
    if (index === 0) {
      setCheckedOptions([]);
    }
  };

  const handleOne = (index: number, item: string) => {
    checkRefs.current.forEach(ref => {
      ref.checked = false;
      ref.setNativeProps({
        style: {
          backgroundColor: '#fff'
        }
      });
    });

    checkRefs.current[index].checked = true;
    checkRefs.current[index].value = item;
    checkRefs.current[index].setNativeProps({
      style: {
        backgroundColor: '#1E3452'
      }
    });
    handleCheckOptions();
  };

  const handleMany = (index: number, item: string) => {
    if (!item.startsWith('Não') || item === 'Não utiliza maquinário com solo úmido') {
      checkRefs.current.forEach(ref => {
        if (ref.value) {
          if (
            ref.value.startsWith('Não') &&
            ref.value !== 'Não utiliza maquinário com solo úmido'
          ) {
            ref.checked = false;
            ref.setNativeProps({
              style: {
                backgroundColor: '#fff'
              }
            });
          }
        }
      });
    }

    if (checkRefs.current[index].checked === true) {
      checkRefs.current[index].checked = false;
      checkRefs.current[index].value = item;
      checkRefs.current[index].setNativeProps({
        style: {
          backgroundColor: '#fff'
        }
      });
    } else {
      checkRefs.current[index].checked = true;
      checkRefs.current[index].value = item;
      checkRefs.current[index].setNativeProps({
        style: {
          backgroundColor: '#00843F'
        }
      });
    }
    handleCheckOptions();
  };

  const handleCheck = (index: number, item: string) => {
    if (item.startsWith('Não') && item !== 'Não utiliza maquinário com solo úmido') {
      handleOne(index, item);
    } else {
      handleMany(index, item);
    }
  };

  const returnOptions = (item: string, index: number) => (
    <ContainerOptions key={index} style={{ marginRight: 10 }}>
      {index === 0 && error && <ErrorMessage>Selecione ao menos 1 item</ErrorMessage>}
      <OptionButton onPress={() => handleCheck(index, item)}>
        <CheckBox
          ref={ref => {
            checkRefs.current[index] = ref;
          }}
        >
          <Icon
            type='font-awesome-5'
            name='check'
            size={size}
            color='#fff'
            tvParallaxProperties={undefined}
          />
        </CheckBox>
        <Label size={size}>{item}</Label>
      </OptionButton>
    </ContainerOptions>
  );

  return (
    <Container style={[containerStyle]}>
      {options.map((item, index) => returnOptions(item, index))}
    </Container>
  );
};

export default Checkbox;
