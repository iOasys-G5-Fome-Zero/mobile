import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SubmitHandler } from '@unform/core';
import { handleError, handleMessage, prettyLog, translateBasket } from '../../../helpers';
import { api } from '../../../services/api';

// icons
import VegetableIcon from '../../../assets/icons/vegetable.svg';

// components
import { Header, Button, Checkbox, Modal } from '../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerScroll,
  StyledLoading,
  StyledContainerCloseModal,
  StyledCircle,
  StyledRow
} from './styles';

// interfaces
interface IDataProps {
  producer_basket: string[];
}

const BasketProducer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const formRef = useRef(null);
  const navigation = useNavigation();

  const formHandle: SubmitHandler<IDataProps> = async data => {
    try {
      const schema = Yup.object().shape({
        producer_basket: Yup.array().min(1).required('Selecione ao menos uma cesta')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      await signBaskets(data.producer_basket);

      setIsOpenModal(true);

      // navigation.goBack();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  const getBaskets = async (size: string) => {
    try {
      const { data } = await api.get(`/baskets/list`, {
        params: {
          size
        }
      });

      return data;
    } catch (error) {
      prettyLog(error.response);

      handleError(error);
    }
  };

  const signBaskets = async (listBasket: string[]) => {
    setLoading(true);

    const ids: string[] = [];

    const basketsIds = listBasket.map(async (size: string) => {
      const basketName = translateBasket.toEnglish(size);
      const baskets = await getBaskets(basketName);

      baskets.forEach((basket: any) => {
        ids.push(basket.id);
      });

      return ids;
    });

    await Promise.all(basketsIds);

    try {
      ids.forEach(async (id: string) => {
        await api.patch('/baskets/assign-basket-to-producer', {
          basketID: id
        });
      });

      handleMessage('Cestas selecionadas com sucesso');
    } catch (error) {
      prettyLog(error.response);

      handleError(error);
    }

    setLoading(false);
  };

  const returnModal = () => {
    return (
      <Modal isVisible={isOpenModal}>
        <StyledContainerCloseModal>
          <Icon
            type='feather'
            name='x'
            color='#262626'
            size={24}
            onPress={() => setIsOpenModal(false)}
            tvParallaxProperties={undefined}
          />
        </StyledContainerCloseModal>

        <StyledCircle>
          <VegetableIcon />
        </StyledCircle>

        <StyledText size={16} textAlign='center' bold color='#00843F'>
          Você selecionou as cestas com sucesso!
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
            onPress={() => setIsOpenModal(false)}
          >
            Cancelar
          </Button>
          <Button
            style={{ marginLeft: 10, width: 99, height: 38 }}
            size={14}
            onPress={async () => {
              setIsOpenModal(false);
              navigation.goBack();
            }}
          >
            {loading ? <StyledLoading size='small' color='#fff' /> : 'Confirmar'}
          </Button>
        </StyledRow>
      </Modal>
    );
  };

  const returnBasket = () => {
    return (
      <>
        <Form ref={formRef} onSubmit={formHandle}>
          <Checkbox
            bigBox
            name='producer_basket'
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
          Selecionar
        </Button>
      </>
    );
  };

  return (
    <StyledContainer>
      <Header title='Minhas Cestas' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledTitle size={14} bold>
          Escolha abaixo qual o tamanho da cesta você deseja fornecer, e veja quantos e quais os
          tipos de alimentos em cada uma.
        </StyledTitle>
        <StyledText>Obs: Você pode selecionar mais de um tamanho</StyledText>
        {returnBasket()}
      </StyledContainerScroll>
      {returnModal()}
    </StyledContainer>
  );
};

export default BasketProducer;
