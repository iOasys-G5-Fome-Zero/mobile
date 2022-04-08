import React, { useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { Icon } from 'react-native-elements';
import { RouteProp, TabActions, useNavigation } from '@react-navigation/native';
import { FormHandles, SubmitHandler } from '@unform/core';

// icons
import VegetableIcon from '../../../../assets/icons/vegetable.svg';

// components
import { Header, Counter, Button, Modal } from '../../../../components';
import {
  StyledText,
  StyledContainer,
  StyledContainerForm,
  StyledContainerWarning,
  StyledRow,
  StyledCircle,
  StyledContainerCloseModal,
  StyledLoading
} from './styles';

// interfaces
import { IProducerBaskets } from '../../../../@types/interfaces/ProducerBaskets';
import { IBasketItems, IFoodInMyBasket } from '../../../../@types/interfaces/Food';
import { useGetFoodsBasket } from '../../../../hooks';

interface IProps {
  route: RouteProp<{ params: { myBasket: IProducerBaskets } }, 'params'>;
}

const MyBasketConsumerSignFood: React.FC<IProps> = ({ route }) => {
  const formRef = useRef<FormHandles>(null);
  const foods = useGetFoodsBasket(route.params?.myBasket.basket_id);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantityFoodsDonation, setQuantityFoodsDonation] = useState(0);
  const [myFoodsBasket, setMyFoodsBasket] = useState([]);

  const navigation = useNavigation();

  const handleNavigate = ({ myBasket }) => {
    const jumpToSignFood = TabActions.jumpTo('MyBasketConsumerSignPayment', {
      myBasket,
      myFoodsBasket
    });

    navigation.dispatch(jumpToSignFood);
  };

  const handleDonateFood: SubmitHandler<IBasketItems> = async data => {
    getFoodRemovedBasket(data);
  };

  const getFoodRemovedBasket = (data: IBasketItems) => {
    const foodMyBasket: IFoodInMyBasket[] = [];
    let countFoodDonation = 0;

    Object.entries(data).forEach(food => {
      foodMyBasket.push({
        foodID: food[0],
        quantity: food[1]
      });
    });

    foodMyBasket.forEach(food => {
      countFoodDonation += food.quantity;
    });

    setMyFoodsBasket(foodMyBasket);
    setQuantityFoodsDonation(countFoodDonation);
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
          <VegetableIcon />
        </StyledCircle>

        <StyledText size={16} align bold color='#00843F'>
          {`Você está doando ${quantityFoodsDonation} itens da sua cesta`}
        </StyledText>

        <StyledText size={14} align>
          Estes itens serão doados para uma instituição que atua no combate a fome. Você pode
          escolher para qual instituição doar na seção de Doações.
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
              handleNavigate({ myBasket: route.params?.myBasket });
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
      <Header title='Assinatura' />
      <StyledContainerForm showsVerticalScrollIndicator={false}>
        <StyledText size={14}>
          {`Você escolheu a cesta de tamanho ${route.params?.myBasket.basket_size} (11 itens), selecione quantas porções de cada categoria deseja receber.`}
        </StyledText>
        <StyledContainerWarning>
          <StyledText align bold size={16}>
            Importante!
          </StyledText>

          <StyledText align size={14}>
            Cada unidade de alimento retirada da sua cesta, é convertida em Horticoins, nossa moeda
            virtual que é utilizada por instituições parceiras para adquirir alimentos e ajudar no
            combate a fome!
          </StyledText>
        </StyledContainerWarning>

        <Form ref={formRef} onSubmit={handleDonateFood}>
          {foods ? (
            foods.map(food => <Counter data={food} />)
          ) : (
            <StyledLoading size='small' color='#00843F' />
          )}
          <Button
            style={{ marginBottom: 60, marginTop: 20, alignSelf: 'center' }}
            size={14}
            onPress={() => {
              formRef.current.submitForm();
              setModalVisible(true);
            }}
          >
            Próximo
          </Button>
        </Form>
      </StyledContainerForm>
      {returnModal()}
    </StyledContainer>
  );
};

export default MyBasketConsumerSignFood;
