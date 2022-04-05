import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core/typings/types';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';
import { useAppDispatch } from '../../../store/store';
import { setUser } from '../../../store';
import { MainStackParams } from '../../Routes';
import { api } from '../../../services/api';

// componets
import { Input, Button } from '../../../components';

// styled componets
import {
  StyledContainer,
  StyledTitle,
  StyledContainerForgotPassword,
  StyledText,
  StyledSaveLogin,
  StyledSaveLoginText,
  StyledContainerRegister,
  StyledRow,
  StyledButtonContainer,
  StyledErrorMessage
} from './styles';

// types
import { IUserResponse } from '../../../@types/interfaces/User';

type NavProps = NativeStackNavigationProp<
  MainStackParams,
  'ConsumerTabNavigator' | 'ProducerTabNavigator'
>;

interface IForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<IForm> = async data => {
    try {
      const { data: dataUser } = await api.post('/auth/login', {
        phoneOrEmail: data.email,
        password: data.password
      });

      setToken(dataUser);
      handleNavigation(dataUser.user_type);
      handleSaveUser(dataUser);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  const handleNavigation = (userType: string) => {
    if (userType === 'consumer') {
      navigation.navigate('ConsumerTabNavigator');
    }

    if (userType === 'producer') {
      navigation.navigate('ProducerTabNavigator');
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
  };

  const handleCheckBox = () => {
    setChecked(status => !status);
  };

  const setToken = async data => {
    await setGenericPassword('accessToken', data.token, {
      service: 'accessToken'
    });

    if (checked) {
      await setGenericPassword('refreshToken', data.refresh_token, {
        service: 'refreshToken'
      });
    }
  };

  const refreshToken = async () => {
    const credentials = await getGenericPassword({
      service: 'refreshToken'
    });

    if (credentials) {
      const { data: dataUser } = await api.put('/auth/refresh', {
        refresh_token: credentials.password
      });

      handleSaveUser(dataUser);
      handleNavigation(dataUser.user_type);
    }
  };

  useEffect(() => {
    refreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>Logo</StyledTitle>
      <Form
        initialData={{
          email: 'consumer@consumer.com',
          password: 'Casas456$'
        }}
        ref={formRef}
        onSubmit={handleLogin}
      >
        <StyledErrorMessage>{error && 'Incorrect email or password'}</StyledErrorMessage>
        <Input name='email' placeholder='E-mail' viewStyle={{ width: '85%' }} />
        <Input name='password' placeholder='Senha' secureTextEntry viewStyle={{ width: '85%' }} />
      </Form>
      <StyledContainerForgotPassword>
        <StyledText size={12}>Esqueceu a senha ?</StyledText>
        <StyledButtonContainer>
          <StyledText size={12} bold>
            Recupera senha
          </StyledText>
        </StyledButtonContainer>
      </StyledContainerForgotPassword>

      <StyledSaveLogin>
        <CheckBox onPress={handleCheckBox} {...{ checked }} />
        <StyledSaveLoginText>Lembrar minha senha</StyledSaveLoginText>
      </StyledSaveLogin>

      <Button
        style={{ marginBottom: 60, marginTop: 20 }}
        size={14}
        onPress={() => formRef.current.submitForm()}
      >
        ENTRAR
      </Button>

      <StyledContainerRegister>
        <StyledRow>
          <StyledText>Ainda não tem uma conta? </StyledText>
          <StyledButtonContainer>
            <StyledText bold onPress={() => navigation.navigate('Register')}>
              Cadastre-se aqui
            </StyledText>
          </StyledButtonContainer>
        </StyledRow>
        <StyledRow>
          <StyledText>Deseja registrar uma ONG? </StyledText>
          <StyledButtonContainer>
            <StyledText bold>Clique aqui</StyledText>
          </StyledButtonContainer>
        </StyledRow>
      </StyledContainerRegister>
    </StyledContainer>
  );
};

export default Login;
