import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { prettyLog } from '../../../../helpers';

// componets
import { Header, Radio, Label, Button } from '../../../../components';

// styled components
import { StyledContainer, StyledTitle, StyledContainerForm } from './styles';

const MyBasketConsumer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleForm = async (data: any) => {
    prettyLog(data);
  };

  return (
    <StyledContainer>
      <Header title='Assinatura' />
      <StyledContainerForm showsVerticalScrollIndicator={false}>
        <Form ref={formRef} onSubmit={handleForm}>
          <StyledTitle>Vamos configurar seu plano</StyledTitle>
          <Label title='Escolha qual a frequência de recebimento ou retirada da sua cesta:' />
          <Radio
            name='day_per_deliver'
            size={14}
            options={['Semanal', 'Quinzenal']}
            containerStyle={{
              paddingVertical: 14,
              paddingHorizontal: 26,
              borderWidth: 1,
              borderColor: '#00843F',
              borderRadius: 5,
              marginBottom: 20
            }}
          />
          <Label title='Escolha qual o tamanho deseja para sua cesta de alimentos:' />
          <Radio
            name='size'
            size={14}
            options={['Pequena - R$ XX,00', 'Média - R$ XX,00', 'Grande - R$ XX,00']}
            descriptions={[
              '1 tempero, 2 legumes, 2 verduras , 3 frutas',
              '2 temperos, 3 legumes, 3 verduras, 3 frutas e 1 processado',
              '3 temperos, 4 legumes, 4 verduras, 4 frutas e 1 processado'
            ]}
            containerStyle={{
              paddingVertical: 14,
              paddingHorizontal: 26,
              borderWidth: 1,
              borderColor: '#00843F',
              borderRadius: 5,
              marginBottom: 20
            }}
          />
          <Label title='Obs: O valor informado acima é cobrado de acordo com a frequência escolhida.' />
        </Form>

        <Button
          style={{ marginBottom: 60, marginTop: 20, alignSelf: 'center' }}
          size={14}
          onPress={() => formRef.current.submitForm()}
        >
          Próximo
        </Button>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default MyBasketConsumer;
