import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../services/api';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store';
import { handleError, handleMessage, login } from '../../helpers';
import { MainStackParams } from '../../routes/Routes';
import { IRegisterRequest, IRegisterResponse } from '../../@types/interfaces/Register';

// components
import { Radio, Button, Input, Checkbox, MaskedInput } from '../../components';
import { StyledContainer, StyledText, StyledLoading } from './styles';

// types

type NavProps = NativeStackNavigationProp<MainStackParams, 'ConfirmRegister'>;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<IRegisterRequest> = async data => {
    setLoading(true);

    try {
      const schemaRegister = Yup.object().shape({
        userType: Yup.string().required('Obrigatório'),
        name: Yup.string().required('Obrigatório'),
        phone: Yup.string().min(10, 'Insira um número de  telefone válido').required('Obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve conter pelo menos 6 dígitos')
          .required('Obrigatório'),
        checked: Yup.array().min(1, 'Você precisa aceitar os termos de uso').required()
      });

      await schemaRegister.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      await handleRegister(data);
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

  const handleRegister = async (formData: IRegisterRequest) => {
    try {
      let lastName: string;
      formData.name.split(' ').forEach((item: string, index: number) => {
        if (index > 0) {
          lastName = `${lastName !== undefined ? lastName : ''}${index === 1 ? '' : ' '}${item}`;
        }
      });
      const firstName = formData.name.split(' ')[0];
      const phoneString = formData.phone.replace(/[^0-9]/g, '');

      await api.post<IRegisterResponse>('/users/new-user/', {
        firstName,
        lastName,
        userType: formData.userType === 'Sou consumidor' ? 'consumer' : 'producer',
        phone: phoneString,
        password: formData.password
      });

      const user = await login({ phoneOrEmail: phoneString, password: formData.password });

      dispatch(
        setUser({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          phone: user.phone,
          userType: user.user_type
        })
      );

      navigation.navigate('ConfirmRegister');
    } catch (error) {
      if (error.response.date === 503) {
        handleMessage('Não foi possível conectar com o servidor. Tente novamente mais tarde.');
      }

      if (error.response.status === 409) {
        handleMessage('Número de telefone já cadastrado');
      } else {
        handleError(error);
      }
    }
  };

  return (
    <StyledContainer>
      <StyledText style={{ marginTop: 60 }} bold size={24}>
        Criar conta
      </StyledText>
      <StyledText style={{ marginBottom: 20, marginTop: 10 }} size={14}>
        Informação sobre cadastro
      </StyledText>
      <Form
        initialData={{
          email: '',
          password: ''
        }}
        ref={formRef}
        onSubmit={handleLogin}
      >
        <Radio name='userType' options={['Sou produtor', 'Sou consumidor']} size={14} />

        <Input containerStyle={{ marginTop: 20 }} name='name' placeholder='Nome' />
        <MaskedInput name='phone' placeholder='Telefone' type='cel-phone' />
        <Input name='password' placeholder='Senha' secureTextEntry />
        <StyledText style={{ marginBottom: 50 }} size={12}>
          A senha deve conter pelo menos 6 caracteres, incluindo letras e números.
        </StyledText>

        <Checkbox
          name='checked'
          size={10}
          options={['Concordo com a Política de Privacidade e Termos de uso']}
        />
      </Form>

      <Button
        style={{ marginTop: 20, alignSelf: 'center', width: 200, height: 49 }}
        size={14}
        onPress={() => formRef.current.submitForm()}
      >
        {loading ? <StyledLoading size='small' color='#fff' /> : 'Finalizar cadastro'}
      </Button>
    </StyledContainer>
  );
};

export default Register;
