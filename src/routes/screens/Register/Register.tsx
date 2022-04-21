import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../../services/api';
import { useAppDispatch } from '../../../store/store';
import { setUser, setLogged } from '../../../store';
import { handleError, handleMessage } from '../../../helpers';
import { MainStackParams } from '../../Routes';
import { IUserResponse } from '../../../@types/interfaces/User';
import { IRegisterRequest, IRegisterResponse } from '../../../@types/interfaces/Register';

// components
import { Radio, Button, Input, Checkbox, MaskedInput } from '../../../components';
import { StyledContainer, StyledText, StyledLoading } from './styles';

// types

type NavProps = NativeStackNavigationProp<MainStackParams, 'Onboarding'>;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    navigation.navigate('Onboarding');
  };

  const handleLogin: SubmitHandler<IRegisterRequest> = async data => {
    setLoading(true);

    try {
      const schemaRegiste = Yup.object().shape({
        userType: Yup.string().required('Obrigatório'),
        name: Yup.string().required('Obrigatório'),
        phone: Yup.string().required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
        checked: Yup.array().min(1, 'Você precisa aceitar os termos de uso').required()
      });

      await schemaRegiste.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      await setRegister(data);
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

  const setRegister = async (formData: IRegisterRequest) => {
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

      const { data: dataUser } = await api.post(
        '/auth/login',
        {
          phoneOrEmail: phoneString,
          password: formData.password
        },
        { timeout: 10000 }
      );

      handleSaveUser(dataUser);

      handleNavigation();
    } catch (error) {
      if (error.response.status === 409) {
        handleMessage('Número de telefone já cadastrado');
      } else {
        handleError(error);
      }
    }
  };

  const handleSaveUser = (user: IUserResponse) => {
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

    dispatch(setLogged(true));
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

        <Input name='name' placeholder='Nome' />
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
