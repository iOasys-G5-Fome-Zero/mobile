import { Form } from '@unform/mobile';
import React, { useState, useRef } from 'react';

// components
import { Header, Button, Checkbox } from '../../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerCestas,
  StyledSaveCestas,
  StyledSaveCestasText,
  StyledSaveCestasTitle
} from './styles';

const BasketProducer: React.FC = () => {
  const formRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
    setChecked(status => !status);
  };
  const formHandle = data => {
    console.log(data);
  };
  const returnBasket = () => {
    return (
      <>
        <Form ref={formRef} onSubmit={formHandle}>
          <Checkbox
            bigBox
            name='small'
            size={14}
            options={['Pequena', 'Média', 'Grande']}
            subOptions={[
              '1 tempero, 2 legumes, 2 verduras , 3 frutas',
              '2 temperos, 3 legumes, 3 verduras, 3 frutas e 1 processado',
              '3 temperos, 4 legumes, 4 verduras, 4 frutas e 1 processado'
            ]}
          />
        </Form>

        <Button
          style={{ backgroundColor: '#00843F', alignSelf: 'center', marginTop: 10 }}
          size={14}
          onPress={() => formRef.current.submitForm()}
        >
          Confirmar Seleção
        </Button>
      </>
    );
  };
  return (
    <>
      <Header title='Minhas Cestas' />
      <StyledContainer>
        <StyledTitle size={14} bold>
          Escolha abaixo qual o tamanho da cesta você deseja fornecer, e veja quantos e quais os
          tipos de alimentos em cada uma.
        </StyledTitle>
        <StyledText>Obs: Você pode selecionar mais de um tamanho</StyledText>
        {returnBasket()}
      </StyledContainer>
    </>
  );
};

export default BasketProducer;
