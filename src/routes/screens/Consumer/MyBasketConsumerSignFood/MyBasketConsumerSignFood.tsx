import React, { useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { Icon } from 'react-native-elements';
import { RouteProp, TabActions, useNavigation } from '@react-navigation/native';
import { FormHandles, SubmitHandler } from '@unform/core';
import { translateBasket, getTotalItemsBasket } from '../../../../helpers';
import { IFoodBasketResponse } from '../../../../@types/interfaces/Food';

// icons
import VegetableIcon from '../../../../assets/icons/vegetable.svg';

// components
import { Header, Counter, Button, Modal } from '../../../../components';
import {
  StyledText,
  StyledContainer,
  StyledContainerScroll,
  StyledContainerWarning,
  StyledRow,
  StyledCircle,
  StyledContainerCloseModal,
  StyledLoading
} from './styles';

// interfaces
import { IProducerBaskets } from '../../../../@types/interfaces/Basket';
import { IBasketItems, IMyRemovedFood } from '../../../../@types/interfaces/Food';
import { useGetFoodsBasket } from '../../../../hooks';

interface IProps {
  route: RouteProp<{ params: { myBasket: IProducerBaskets } }, 'params'>;
}

const MyBasketConsumerSignFood: React.FC<IProps> = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantityFoodsDonation, setQuantityFoodsDonation] = useState(0);
  const [myRemovedFoodsBasket, setMyRemovedFoodsBasket] = useState([]);
  const formRef = useRef<FormHandles>(null);
  const foods = useGetFoodsBasket(route.params?.myBasket.basket_id);
  const navigation = useNavigation();

  const handleFood: SubmitHandler<IBasketItems> = async data => {
    getFoodRemovedBasket(data);
  };

  const handleNavigate = (goTo: string, params = {}) => {
    const jumpToSignFood = TabActions.jumpTo(goTo, params);

    navigation.dispatch(jumpToSignFood);
  };

  const getFoodRemovedBasket = (data: IBasketItems) => {
    const foodMyBasket: IMyRemovedFood[] = [];
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

    setMyRemovedFoodsBasket(foodMyBasket);
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

        <StyledText size={16} textAlign='center' bold color='#00843F'>
          {`Você está doando ${quantityFoodsDonation} itens da sua cesta`}
        </StyledText>

        <StyledText size={14} textAlign='center'>
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
              handleNavigate('MyBasketConsumerSignPayment', {
                myBasket: route.params?.myBasket,
                myRemovedFoodsBasket
              });
            }}
          >
            Confirmar
          </Button>
        </StyledRow>
      </Modal>
    );
  };

  if (!foods) {
    return <StyledLoading size='small' color='#00843F' />;
  }

  return (
    <StyledContainer>
      <Header title='Assinatura' nav={() => handleNavigate('MyBasketConsumerSignPlan')} />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledText size={14}>
          {`Você escolheu a cesta de tamanho ${translateBasket(
            route.params?.myBasket.basket_size
          )} (${getTotalItemsBasket(
            route.params?.myBasket.basket_size
          )} itens), selecione quantas porções de cada categoria deseja receber.`}
        </StyledText>
        <StyledContainerWarning>
          <StyledText textAlign='center' bold size={16}>
            Importante!
          </StyledText>

          <StyledText textAlign='center' size={14}>
            Cada unidade de alimento retirada da sua cesta, é convertida em Horticoins, nossa moeda
            virtual que é utilizada por instituições parceiras para adquirir alimentos e ajudar no
            combate a fome!
          </StyledText>
        </StyledContainerWarning>

        <Form ref={formRef} onSubmit={handleFood}>
          {foods ? (
            foods.map((food: IFoodBasketResponse, index: number) => (
              <Counter
                index={index}
                name={food.foodID.id}
                image={food.foodID.imageUrl}
                maxQuantity={food.quantity}
              />
            ))
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
      </StyledContainerScroll>
      {returnModal()}
    </StyledContainer>
  );
};

export default MyBasketConsumerSignFood;
