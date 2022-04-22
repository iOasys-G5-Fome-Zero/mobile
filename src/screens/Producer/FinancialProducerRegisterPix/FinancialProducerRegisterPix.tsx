/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Icon } from 'react-native-elements';
import { Form } from '@unform/mobile';
import { SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { handleError, prettyLog } from '../../../helpers';
import { api } from '../../../services/api';

// icons
import PiggyBankIcon from '../../../assets/icons/piggy-bank.svg';

// components
import { Header, Radio, Input, Button, Modal } from '../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledText,
  StyledLoading,
  StyledContainerCloseModal,
  StyledCircle
} from './styles';

// interface
interface IFormHandle {
  type: string;
  key: string;
}

const FinancialProducerRegisterPix: React.FC = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigation = useNavigation();

  const handleFormRegisterPix: SubmitHandler<IFormHandle> = async data => {
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        type: Yup.string().required('O tipo é obrigatório'),
        key: Yup.string().required('A chave é obrigatória')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      await registerKeyPix(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    formRef.current.reset();
    setLoading(false);
  };

  const getTypePix = (key: string) => {
    switch (key) {
      case 'CPF':
        return 'cpf';
      case 'E-mail':
        return 'email';
      case 'Celular':
        return 'phone';
      case 'Chave aleatória':
        return 'randon';
      default:
    }
  };

  const registerKeyPix = async (data: IFormHandle) => {
    try {
      await api.post('/producers/pix/set-pix', {
        pixType: getTypePix(data.type),
        pixValue: data.key
      });

      setOpenConfirmModal(true);
    } catch (error) {
      handleError(error.response);
    }
  };

  const returnConfirmModal = () => {
    return (
      <Modal isVisible={openConfirmModal}>
        <StyledContainerCloseModal>
          <Icon
            type='feather'
            name='x'
            color='#262626'
            onPress={() => {
              setOpenConfirmModal(false);
              navigation.goBack();
            }}
            tvParallaxProperties={undefined}
          />
        </StyledContainerCloseModal>

        <StyledCircle>
          <PiggyBankIcon />
        </StyledCircle>

        <StyledText size={18} textAlign='center' color='#00843F' bold>
          Sua chave PIX foi registrada com sucesso!
        </StyledText>
      </Modal>
    );
  };

  return (
    <StyledContainer>
      <Header title='Chaves pix' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <Form ref={formRef} onSubmit={handleFormRegisterPix}>
          <StyledText style={{ marginBottom: 30 }} size={14}>
            Informe qual tipo de chave pix deseja cadastrar para receber suas vendas:
          </StyledText>
          <Radio
            name='type'
            size={14}
            options={['CPF', 'Celular', 'E-mail', 'Chave aleatória']}
            backLine
          />

          <StyledText style={{ marginTop: 30, marginBottom: 30 }} size={14}>
            Registrar nova chave pix:
          </StyledText>
          <Input name='key' placeholder='Informe a chave pix' />
        </Form>

        <Button
          style={{ alignSelf: 'center', marginTop: 20 }}
          size={14}
          onPress={() => formRef.current.submitForm()}
        >
          {loading ? <StyledLoading size='small' color='#fff' /> : 'Registrar chave'}
        </Button>
      </StyledContainerScroll>
      {returnConfirmModal()}
    </StyledContainer>
  );
};

export default FinancialProducerRegisterPix;
