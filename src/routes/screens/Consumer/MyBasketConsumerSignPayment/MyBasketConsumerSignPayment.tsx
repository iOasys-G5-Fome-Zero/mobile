import React, { useRef, useState } from 'react';
import Clipboard from '@react-native-community/clipboard';
import { Icon } from 'react-native-elements';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { RouteProp } from '@react-navigation/native';

// icons
import BasketVegetableIcon from '../../../../assets/icons/vegetable-basket.svg';

// components
import { Header, Radio, Button, Modal } from '../../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledContainerForm,
  StyledText,
  StyledBox,
  StyledRow,
  StyledContainerCloseModal,
  StyledCircle
} from './styles';

// interfaces
import { IProducerBaskets } from '../../../../@types/interfaces/ProducerBaskets';
import { IFoodInMyBasket } from '../../../../@types/interfaces/Food';
import { prettyLog } from '../../../../helpers';

interface IProps {
  route: RouteProp<
    { params: { myBasket: IProducerBaskets; myFoodsBasket: IFoodInMyBasket } },
    'params'
  >;
}

const MyBasketConsumerSignPayment: React.FC<IProps> = ({ route }) => {
  const formRef = useRef<FormHandles>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePaymentBasket = data => {
    prettyLog(data);
  };

  const copyToClipboard = () => {
    Clipboard.setString('Chave pix');
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

        <StyledText size={16} align bold color='#00843F'>
          Seu pedido foi confirmado e está sendo preparado!
        </StyledText>

        <StyledText size={14} align>
          Para combinar a entrega entre em contato com o produtor pelo chat. Te enviaremos uma
          notificação??
        </StyledText>

        <StyledRow>
          <Button
            style={{
              backgroundColor: 'transparent',
              width: 99,
              height: 38,
              marginRight: 10
            }}
            size={14}
            fontColor='#00843F'
            onPress={() => setModalVisible(false)}
          >
            Cancelar
          </Button>
          <Button
            style={{ marginLeft: 10, width: 99, height: 38 }}
            size={14}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            Confirmar
          </Button>
        </StyledRow>
      </Modal>
    );
  };

  return (
    <StyledContainer>
      <Header title='Confirmação do pedido' />
      <StyledContainerForm showsVerticalScrollIndicator={false}>
        <StyledTitle>Entrega</StyledTitle>
        <StyledText size={14}>
          Escolha se você prefere retirar sua cesta em um dos nossos pontos de coleta, ou receber em
          casa pagando uma taxa a mais
        </StyledText>
        <Form ref={formRef} onSubmit={handlePaymentBasket}>
          <Radio
            name='delivery'
            size={14}
            options={['Retirar no ponto de coleta - R$00,00', 'Entrega (à combinar com produtor)']}
          />
        </Form>
        <StyledBox>
          <StyledText size={21} bold>
            Subtotal
          </StyledText>
          <StyledRow between>
            <StyledText size={14}>{route.params?.myBasket.basket_size}</StyledText>
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
          Realize o pagamento para a chave pix informada abaixo e em seguida anexe o comprovante de
          pagamento.
        </StyledText>
        <StyledBox style={{ marginTop: 0 }}>
          <StyledRow between>
            <StyledText size={14} style={{ marginBottom: 0 }}>
              Chave pix
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
        <Button
          style={{ alignSelf: 'center', marginBottom: 60 }}
          size={14}
          onPress={() => setModalVisible(true)}
        >
          Concluir compra
        </Button>
      </StyledContainerForm>
      {returnModal()}
    </StyledContainer>
  );
};

export default MyBasketConsumerSignPayment;
