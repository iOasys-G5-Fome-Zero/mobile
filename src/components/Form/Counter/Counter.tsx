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
  StyledLink
} from './styles';

// interfaces
import { IFoodBasketResponse } from '../../../@types/interfaces/Food';

interface IProps {
  data: IFoodBasketResponse;
}

const Counter: React.FC<IProps> = ({ data }) => {
  const [counter, setCounter] = useState(data.quantity);

  const { fieldName, registerField } = useField(data.foodID.id);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: {},
      getValue: () => data.quantity - counter,
      setValue: (ref, value) => setCounter(value)
    });
  });

  return (
    <StyledContainer key={data.id}>
      <StyledImage source={{ uri: data.foodID.imageUrl }} resizeMode='cover' />
      <StyledContinerInfo>
        <StyledColumn>
          <StyledText>{translateFood(data.foodID.name)}</StyledText>
          <StyledButton>
            <StyledLink>Ver exemplos</StyledLink>
          </StyledButton>
        </StyledColumn>
        <StyledCounterBox>
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
              onPress={() => setCounter(counter + 1 > data.quantity ? data.quantity : counter + 1)}
              tvParallaxProperties={undefined}
            />
          </StyledButton>
        </StyledCounterBox>
      </StyledContinerInfo>
    </StyledContainer>
  );
};

export default Counter;
