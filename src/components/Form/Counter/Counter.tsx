import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useField } from '@unform/core';
import { translateFood } from '../../../helpers';

//
import {
  StyledContainer,
  StyledText,
  StyledContinerInfo,
  StyledImage,
  StyledCounterBox,
  StyledButton,
  StyledColumn,
  StyledLink,
  StyledContainerCounter
} from './styles';

// interfaces

interface IProps {
  index: number;
  name: string;
  label?: string;
  image?: string;
  maxQuantity: number;
  justCounter?: boolean;
}

const Counter: React.FC<IProps> = ({
  index,
  name,
  label = '',
  image = '',
  maxQuantity,
  justCounter = false
}) => {
  const [counter, setCounter] = useState(justCounter ? 0 : maxQuantity);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: {},
      getValue: () => {
        if (maxQuantity) {
          return counter;
        }
        return maxQuantity - counter;
      },
      setValue: (ref, value) => setCounter(value)
    });
  });

  const returnCounterBox = () => {
    return (
      <StyledContainerCounter>
        {error && (
          <StyledText style={{ marginBottom: 10 }} size={12}>
            {error}
          </StyledText>
        )}
        <StyledCounterBox key={justCounter && index}>
          <StyledButton>
            <Icon
              type='feather'
              name='minus'
              color='#262626'
              size={14}
              onPress={() => setCounter(counter - 1 < 0 ? 0 : counter - 1)}
              tvParallaxProperties={undefined}
            />
          </StyledButton>
          <StyledText>{counter}</StyledText>
          <StyledButton>
            <Icon
              type='feather'
              name='plus'
              color='#262626'
              size={14}
              onPress={() => setCounter(counter + 1 > maxQuantity ? maxQuantity : counter + 1)}
              tvParallaxProperties={undefined}
            />
          </StyledButton>
        </StyledCounterBox>
      </StyledContainerCounter>
    );
  };

  if (justCounter) {
    return returnCounterBox();
  }

  return (
    <StyledContainer key={!justCounter && index}>
      <StyledImage source={{ uri: image }} resizeMode='cover' />
      <StyledContinerInfo>
        <StyledColumn>
          <StyledText>{translateFood(label)}</StyledText>
          <StyledButton>
            <StyledLink>Ver exemplos</StyledLink>
          </StyledButton>
        </StyledColumn>
        {returnCounterBox()}
      </StyledContinerInfo>
    </StyledContainer>
  );
};

export default Counter;
