import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TabActions, useNavigation } from '@react-navigation/native';
import { handleError, getDefaulSize, getDefaultFrequency, prettyLog } from '../../../helpers';
import { api } from '../../../services/api';

// componets
import { Header, Radio, Label, Button } from '../../../components';

// styled components
import { StyledContainer, StyledTitle, StyledContainerScroll, StyledLoading } from './styles';

// interfaces
import { IProducerBaskets } from '../../../@types/interfaces/Basket';

const MyBasketConsumerSignPlan: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const handlePlan = async (data: any) => {
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        frequency: Yup.string().required('Frequencia é obrigatório'),
        size: Yup.string().required('Tamnho da cesta é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      const myBasket = await getBasket(data.frequency, data.size);

      // assina o plano com a cesta
      await singPlan({
        basketID: myBasket.basket_id,
        producerID: myBasket.user_id
      });

      handleNavigate(myBasket);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    setLoading(false);
  };

  const handleNavigate = (myBasket: IProducerBaskets) => {
    const jumpToSignFood = TabActions.jumpTo('MyBasketConsumerSignFood', { myBasket });

    navigation.dispatch(jumpToSignFood);
  };

  const getBasket = async (frequency: string, size: string) => {
    try {
      const { data } = await api.get('/baskets/producers-baskets', {
        params: {
          daysPerDeliver: getDefaultFrequency(frequency),
          size: getDefaulSize(size)
        }
      });

      const randonNumber = Math.floor(Math.random() * data.length);

      const basket = data[randonNumber];

      return basket;
    } catch (error) {
      handleError(error);
    }
  };

  const singPlan = async ({ basketID, producerID }) => {
    try {
      await api.patch('/baskets/assign-basket-to-consumer', {
        basketID,
        producerID
      });

      prettyLog('assinou o plano');
    } catch (error) {
      prettyLog('erro ao assinar o plano');
    }
  };

  return (
    <StyledContainer>
      <Header title='Assinatura' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <Form ref={formRef} onSubmit={handlePlan}>
          <StyledTitle>Vamos configurar seu plano</StyledTitle>
          <Label title='Escolha qual a frequência de recebimento ou retirada da sua cesta:' />
          <Radio
            name='frequency'
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
            options={['Pequena', 'Média', 'Grande']}
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
          {loading ? <StyledLoading size='small' color='#fff' /> : 'Próximo'}
        </Button>
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default MyBasketConsumerSignPlan;
