import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { CheckBox } from 'react-native-elements';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../../services/api';
import { useAppDispatch } from '../../../store/store';
import { setUser } from '../../../store';
// import { prettyLog } from '../../../helpers';

// components
import { Radio, Button, Input } from '../../../components';
import { StyledContainer, StyledText, StyledSaveLogin, StyledSaveLoginText } from './styles';
import { handleError, handleMessage } from '../../../helpers';
import { MainStackParams } from '../../Routes';

// types
import { IRegisterRequest, IRegisterResponse } from '../../../@types/interfaces/Register';

type NavProps = NativeStackNavigationProp<MainStackParams, 'Onboarding'>;

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  const handleCheckBox = () => {
    setChecked(status => !status);
  };

  const handleNavigation = () => {
    navigation.navigate('Onboarding');
  };

  const handleLogin: SubmitHandler<IRegisterRequest> = async data => {
    try {
      const schemaRegiste = Yup.object().shape({
        userType: Yup.string().required('Obrigatório'),
        name: Yup.string().required('Obrigatório'),
        email: Yup.string().required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
        confirmPassword: Yup.string().required('Obrigatório')
      });

      await schemaRegiste.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      if (!checked) {
        handleMessage('Você deve marcar a caixa de Aceito os Termos para continuar');
      } else {
        await setRegister(data);
      }
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

  const setRegister = async (formData: IRegisterRequest) => {
    try {
      let lastName: string;

      formData.name.split(' ').forEach((item: string, index: number) => {
        if (index > 0) {
          lastName = `${lastName !== undefined ? lastName : ''}${index === 1 ? '' : ' '}${item}`;
        }
      });

      const firstName = formData.name.split(' ')[0];

      const { data } = await api.post<IRegisterResponse>('/users/new-user/', {
        firstName,
        lastName,
        userType: formData.userType === 'Sou consumidor' ? 'consumer' : 'producer',
        email: formData.email,
        password: formData.password
      });

      dispatch(
        setUser({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          userType: data.userType
        })
      );
      handleNavigation();
    } catch (error) {
      handleError(error);
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
        <Input name='name' placeholder='Nome' />
        <Input name='email' placeholder='E-mail' />
        <Input name='password' placeholder='Senha' secureTextEntry />
        <StyledText size={12}>A senha deve conter:</StyledText>
        <StyledText size={12}>Pelo menos 1 letra</StyledText>
        <StyledText size={12}>Pelo menos 1 dígito</StyledText>
        <StyledText size={12} style={{ marginBottom: 20 }}>
          Pelo menos 1 caractere especial
        </StyledText>
        <Input name='confirmPassword' placeholder='Confirmar senha' secureTextEntry />
      </Form>

      <StyledSaveLogin>
        <CheckBox onPress={handleCheckBox} {...{ checked }} />
        <StyledSaveLoginText>
          Concordo com a Política de Privacidade e Termos de uso
        </StyledSaveLoginText>
      </StyledSaveLogin>

      <Button
        style={{ marginTop: 20, alignSelf: 'center', width: 200, height: 49 }}
        size={14}
        onPress={() => formRef.current.submitForm()}
      >
        Finalizar cadastro
      </Button>
    </StyledContainer>
  );
};

export default Register;
