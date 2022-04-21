import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../../store/store';
import { MainStackParams } from '../../Routes';

// images
import ProducerIcon from '../../../assets/icons/confirm-regiser-producer-icon.svg';
import ConsumerIcon from '../../../assets/icons/confirm-regiser-consumer-icon.svg';

// components
import { Button } from '../../../components';
import { StyledContainer, StyledText } from './styles';

// types
type NavProps = NativeStackNavigationProp<MainStackParams, 'Onboarding'>;

const ConfirmRegister = () => {
  const user = useAppSelector(state => state.userReducer.user);
  const navigation = useNavigation<NavProps>();

  return (
    <StyledContainer>
      {user.userType === 'consumer' ? (
        <ConsumerIcon style={{ marginBottom: 40 }} />
      ) : (
        <ProducerIcon style={{ marginBottom: 40 }} />
      )}
      <StyledText style={{ marginBottom: 40 }} size={21} bold color='#00843F'>
        Cadastro realizado com sucesso!
      </StyledText>
      <StyledText style={{ marginBottom: 80 }} size={14} textAlign='center'>
        Valide seu cadastro e aproveite toda a experiência de Cestar e ajudar no combate a fome.
      </StyledText>
      <Button size={14} onPress={() => navigation.navigate('Onboarding')}>
        Começar
      </Button>
    </StyledContainer>
  );
};

export default ConfirmRegister;
