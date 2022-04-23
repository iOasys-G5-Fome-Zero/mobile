import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import Clipboard from '@react-native-community/clipboard';
import { Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { RouteProp, TabActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetPhoneProducer, useGetPixProducer } from '../../../hooks';
import { handleMessage, prettyLog, translateBasket } from '../../../helpers';
import { api } from '../../../services/api';
import { IProducerBaskets } from '../../../@types/interfaces/Basket';
import { IDelivery } from '../../../@types/interfaces/Delivery';
import { IMyRemovedFood } from '../../../@types/interfaces/Food';
import { BottomTabConsumerParams } from '../../../routes/tabs/ConsumerTabNavigator';

// icons
import BasketVegetableIcon from '../../../assets/icons/vegetable-basket.svg';

// components
import { Header, Radio, Button, Modal } from '../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledContainerScroll,
  StyledText,
  StyledBox,
  StyledRow,
  StyledContainerCloseModal,
  StyledCircle,
  StyledLoading,
  StyledColumn
} from './styles';

// interfaces

type NavProps = NativeStackNavigationProp<
  BottomTabConsumerParams,
  'DonationsConsumer' | 'HomeConsumer'
>;

interface IProps {
  route: RouteProp<
    { params: { myBasket: IProducerBaskets; myRemovedFoodsBasket: IMyRemovedFood[] } },
    'params'
  >;
}

const MyBasketConsumerSignPayment: React.FC<IProps> = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const phoneProducer = useGetPhoneProducer(route.params?.myBasket.user_id);
  const pixProducer = useGetPixProducer();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<NavProps>();

  const handlePayment: SubmitHandler<IDelivery> = async data => {
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        delivery: Yup.string().required('Selecione uma opção de entrega')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      // remove as comidas da cesta para doação
      await setRemovedFood();

      setModalVisible(true);
    } catch (error) {
      const errorMessages = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }

    setLoading(false);
  };

  const handleNavigate = (goTo: string, params = {}) => {
    const jumpToSignFood = TabActions.jumpTo(goTo, params);

    navigation.dispatch(jumpToSignFood);
  };

  const copyToClipboard = () => {
    Clipboard.setString(pixProducer);
  };

  const setRemovedFood = async () => {
    try {
      const removedFoods = route.params.myRemovedFoodsBasket.filter(food => food.quantity);

      await api.delete('/consumers/basket/delete-removed-foods');
      await api.post(`/consumers/basket/set-removed-foods`, removedFoods);
    } catch (error) {
      prettyLog(error.response.data);

      prettyLog('erro ao remover as comidas');
    }
  };

  const WhatsAppLink = () => {
    Linking.openURL(`whatsapp://send?phone=55${phoneProducer}`);
  };

  const returnModal = () => {
    return (
      <Modal isVisible={modalVisible}>
        <StyledContainerCloseModal>
          <Icon
            type='feather'
            name='x'
            color='#262626'
            size={24}
            onPress={() => setModalVisible(false)}
            tvParallaxProperties={undefined}
          />
        </StyledContainerCloseModal>

        <StyledCircle>
          <BasketVegetableIcon />
        </StyledCircle>

        <StyledText size={16} textAlign='center' bold color='#00843F'>
          Seu pedido foi confirmado e está sendo preparado!
        </StyledText>

        <StyledText size={14} textAlign='center'>
          Para alinhar a entrega ou coleta da cesta, vá para mensagens e combine todos os detalhes
          diretamente com o produtor.
        </StyledText>

        <StyledColumn>
          <Button
            style={{ width: 140, height: 38 }}
            size={12}
            onPress={async () => {
              if (phoneProducer) {
                WhatsAppLink();
                setModalVisible(false);
                navigation.goBack();
              } else {
                handleMessage('Esse produtor ainda não cadastrou seu número de Whatsapp');
              }
            }}
          >
            Ir para mensagens
          </Button>
          <Button
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#00843F',
              width: 140,
              height: 38
            }}
            size={12}
            fontColor='#00843F'
            onPress={() => {
              setModalVisible(false);
              navigation.goBack();
              navigation.navigate('DonationsConsumer');
            }}
          >
            Ir para doaçoes
          </Button>
        </StyledColumn>
      </Modal>
    );
  };

  return (
    <StyledContainer>
      <Header
        title='Confirmação do pedido'
        nav={() => handleNavigate('MyBasketConsumerSignFood', { myBasket: route.params.myBasket })}
      />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledTitle>Entrega</StyledTitle>
        <StyledText size={14}>
          Escolha se você prefere retirar sua cesta em um dos nossos pontos de coleta, ou receber em
          casa pagando uma taxa a mais
        </StyledText>
        <Form ref={formRef} onSubmit={handlePayment}>
          <Radio
            name='delivery'
            size={14}
            options={['Retirar no ponto de coleta', 'Entrega (à combinar com produtor)']}
          />
          <StyledBox>
            <StyledText size={21} bold>
              Subtotal
            </StyledText>
            <StyledRow between>
              <StyledText size={14}>
                {`Cesta ${translateBasket.toPortuguese(route.params?.myBasket.basket_size)} ${
                  route.params?.myBasket.basket_days_per_deliver === '15'
                    ? '(quinzenal)'
                    : '(semanal)'
                }`}
              </StyledText>
              <StyledText size={14}>{`R$ ${route.params?.myBasket.basket_value}`}</StyledText>
            </StyledRow>
            <StyledRow between>
              <StyledText size={14}>Total</StyledText>
              <StyledText size={14} bold>{`R$ ${route.params?.myBasket.basket_value}`}</StyledText>
            </StyledRow>
          </StyledBox>
          <StyledText size={21} bold>
            Pagamento
          </StyledText>
          <StyledText size={14}>
            Realize o pagamento para a chave pix informada abaixo e em seguida anexe o comprovante
            de pagamento.
          </StyledText>
          <StyledBox style={{ marginTop: 0 }}>
            <StyledRow between>
              <StyledText size={14} style={{ marginBottom: 0 }}>
                {pixProducer}
              </StyledText>
              <Icon
                type='feather'
                name='copy'
                size={20}
                color='#000'
                onPress={copyToClipboard}
                tvParallaxProperties={undefined}
              />
            </StyledRow>
          </StyledBox>
        </Form>
        <Button
          style={{ alignSelf: 'center', marginBottom: 60 }}
          size={14}
          onPress={() => {
            formRef.current.submitForm();
          }}
        >
          {loading ? <StyledLoading size='small' color='#fff' /> : 'Concluir compra'}
        </Button>
      </StyledContainerScroll>
      {returnModal()}
    </StyledContainer>
  );
};

export default MyBasketConsumerSignPayment;
