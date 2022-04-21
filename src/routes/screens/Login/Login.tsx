import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core/typings/types';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';
import { useAppDispatch } from '../../../store/store';
import { setUser, setWeb, setLogged } from '../../../store';
import { MainStackParams } from '../../Routes';
import { api } from '../../../services/api';

// images
import Logo from '../../../assets/icons/logo.svg';

// componets
import { Input, Button, Checkbox, MaskedInput, ButtonInfoSite } from '../../../components';

// styled componets
import {
  StyledContainer,
  StyledContainerForgotPassword,
  StyledText,
  StyledContainerRegister,
  StyledRow,
  StyledButtonContainer,
  StyledErrorMessage,
  StyledLoading
} from './styles';

// types
import { IUserResponse } from '../../../@types/interfaces/User';
import { ILoginResponse } from '../../../@types/interfaces/Login';

type NavProps = NativeStackNavigationProp<
  MainStackParams,
  'ConsumerTabNavigator' | 'ProducerTabNavigator' | 'WebView'
>;

interface IForm {
  phone: string;
  password: string;
  checked?: boolean;
}

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<IForm> = async data => {
    setLoadingLogin(true);

    try {
      const phoneString = data.phone.replace(/[^0-9]/g, '');

      const { data: dataUser } = await api.post(
        '/auth/login',
        {
          phoneOrEmail: phoneString,
          password: data.password
        },
        { timeout: 10000 }
      );

      setToken(dataUser, !!data.checked);
      handleNavigation(dataUser.user_type);
      handleSaveUser(dataUser);
      setError(false);
    } catch (err) {
      setError(true);
    }

    setLoadingLogin(false);
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

    dispatch(setLogged(true));
  };

  const setToken = async (data: ILoginResponse, checked: boolean) => {
    await setGenericPassword('accessToken', data.token, {
      service: 'accessToken'
    });

    if (checked) {
      await setGenericPassword('refreshToken', data.refresh_token, {
        service: 'refreshToken'
      });
    }
  };

  const refreshAccessToken = async () => {
    const credentials = await getGenericPassword({
      service: 'refreshToken'
    });

    if (credentials) {
      const { data } = await api.put('/auth/refresh');

      await setGenericPassword('accessToken', data.token, {
        service: 'accessToken'
      });

      await setGenericPassword('refreshToken', data.refresh_token, {
        service: 'refreshToken'
      });

      handleSaveUser(data);
      handleNavigation(data.user_type);
    }
  };

  useEffect(() => {
    refreshAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <Logo style={{ marginVertical: 80 }} />
      <Form
        style={{ width: '85%' }}
        initialData={{
          email: '',
          password: ''
        }}
        ref={formRef}
        onSubmit={handleLogin}
      >
        <StyledErrorMessage>{error && 'Incorrect email or password'}</StyledErrorMessage>
        <MaskedInput name='phone' type='cel-phone' placeholder='Telefone' />
        <Input name='password' placeholder='Senha' secureTextEntry />
        <StyledContainerForgotPassword>
          <StyledText size={12}>Esqueceu a senha ?</StyledText>
          <StyledButtonContainer>
            <StyledText size={12} bold link>
              Recupera senha
            </StyledText>
          </StyledButtonContainer>
        </StyledContainerForgotPassword>

        <Checkbox name='checked' size={14} options={['Lembrar minha senha']} />
      </Form>

      <Button
        style={{ marginBottom: 60, marginTop: 20 }}
        size={14}
        onPress={() => formRef.current.submitForm()}
      >
        {loadingLogin ? <StyledLoading size='small' color='#fff' /> : 'Entrar'}
      </Button>
      <StyledContainerRegister>
        <StyledRow>
          <StyledText>Ainda não tem uma conta? </StyledText>
          <StyledButtonContainer>
            <StyledText bold link onPress={() => navigation.navigate('Register')}>
              Cadastre-se aqui
            </StyledText>
          </StyledButtonContainer>
        </StyledRow>
        <StyledRow>
          <StyledText>Deseja registrar uma ONG? </StyledText>
          <StyledButtonContainer>
            <StyledText
              bold
              link
              onPress={() => {
                dispatch(setWeb({ url: 'https://powerhungers.netlify.app/', go: true }));
                navigation.navigate('WebView');
              }}
            >
              Clique aqui
            </StyledText>
          </StyledButtonContainer>
        </StyledRow>
      </StyledContainerRegister>
      <ButtonInfoSite />
    </StyledContainer>
  );
};

export default Login;
