import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Icon } from 'react-native-elements';
import { Form } from '@unform/mobile';
import { SubmitHandler } from '@unform/core';
import { useGetMyCoins } from '../../../../hooks';
// import { prettyLog } from '../../../../helpers';

// mocks
import { data_ongs } from '../../../../services/mocks';

// icons
import HortCoinIcon from '../../../../assets/icons/hort-coins.svg';
import GrowthIcon from '../../../../assets/icons/growth.svg';

// components
import { Header, CardList, Button, Modal, Counter } from '../../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledText,
  StyledContainerInfo,
  StyledContainerCloseModal,
  StyledRow,
  StyledCircle,
  StyledLoading
} from './styles';

const DonationConsumer: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [titleOng, setTitleOng] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmDonation, setConfirmDonation] = useState(false);
  const coins = useGetMyCoins();
  const formRef = useRef(null);

  const handleDonationCoins: SubmitHandler<any> = async data => {
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        doar: Yup.number().min(1, 'Valor mínimo de doação é de 1 HortCoin')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      // await sendDonation(data);
      setConfirmDonation(true);
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

  // const sendDonation = async () => {
  //   try {
  //     await api.post('/donations');

  //     setConfirmDonation(true);
  //   } catch (error) {
  //     prettyLog('erro ao enviar a doação');
  //   }
  // };

  const returnModalConfirmDonation = () => {
    return (
      <Modal isVisible={modalVisible}>
        <StyledContainerCloseModal>
          <Icon
            type='feather'
            name='x'
            color='#262626'
            size={24}
            onPress={() => {
              setConfirmDonation(false);
              setModalVisible(false);
            }}
            tvParallaxProperties={undefined}
          />
        </StyledContainerCloseModal>
        {confirmDonation ? (
          <>
            <StyledCircle>
              <GrowthIcon />
            </StyledCircle>
            <StyledText size={16} color='#00843F' bold textAlign='center' margin>
              {`Doação realizada com sucesso para a ${titleOng}`}
            </StyledText>
          </>
        ) : (
          <>
            <StyledText size={16} color='#00843F' bold textAlign='center' margin>
              {`Você escolheu doar para a ${titleOng}!`}
            </StyledText>
            <StyledText size={14} bold margin>
              {`Você tem ${coins} HortCoin`}
            </StyledText>
            <StyledText size={14} margin>
              Quantas moedas deseja doar?
            </StyledText>
            <Form
              style={{ marginTop: 10, marginBottom: 40 }}
              ref={formRef}
              onSubmit={handleDonationCoins}
            >
              <Counter name='doar' maxQuantity={Number(coins)} index={1} justCounter />
            </Form>
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
                  formRef.current.submitForm();
                }}
              >
                {loading ? <StyledLoading size='small' color='#fff' /> : 'Confirmar'}
              </Button>
            </StyledRow>
          </>
        )}
      </Modal>
    );
  };

  const returnInfoCoins = () => {
    return (
      <StyledContainerInfo row>
        <StyledText style={{ width: '80%' }} size={16}>
          Saldo de moedas Horticoins gerados da sua cesta
        </StyledText>
        <StyledText size={24} bold>
          {coins || '0'}
        </StyledText>
        <HortCoinIcon style={{ marginTop: 2 }} />
      </StyledContainerInfo>
    );
  };

  const returnInfoSite = () => {
    return (
      <StyledContainerInfo>
        <StyledText size={14} margin>
          Para saber mais sobre os projetos e instituições que estamos ajudando, acesse o nosso
          site.
        </StyledText>
        <Button
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#00843F',
            marginBottom: 0
          }}
          size={12}
          fontColor='#262626'
          onPress={() => null}
        >
          Ir para o site
        </Button>
      </StyledContainerInfo>
    );
  };

  return (
    <>
      <StyledContainer>
        <Header title='Doações' />
        <StyledContainerScroll showsVerticalScrollIndicator={false}>
          {returnInfoCoins()}
          <StyledText size={16} bold margin>
            Ajude no combate a fome
          </StyledText>
          <StyledText size={14} margin>
            Veja abaixo as instituições e projetos cadastrados na nossa rede e ajude-nos a atingir a
            meta do mês doando suas Horticoins que serão convertidas em alimentos.
          </StyledText>
          <CardList
            data={data_ongs}
            columns={2}
            doar
            onPress={(title: string) => {
              setTitleOng(title);
              setModalVisible(true);
            }}
          />
          {returnInfoSite()}
        </StyledContainerScroll>
      </StyledContainer>
      {returnModalConfirmDonation()}
    </>
  );
};

export default DonationConsumer;
