import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { resetGenericPassword } from 'react-native-keychain';

// components
import { Button } from '../../../../components';
import { MainStackParams } from '../../../Routes';
import { StyledContainer, StyledTitle } from './styles';

// types
type NavProps = NativeStackNavigationProp<MainStackParams, 'Login'>;

const AboutConsumer: React.FC = () => {
  const navigation = useNavigation<NavProps>();

  const handleGoOut = async () => {
    await resetGenericPassword({ service: 'refreshToken' });
    await resetGenericPassword({ service: 'accessToken' });

    navigation.navigate('Login');
  };

  return (
    <StyledContainer>
      <StyledTitle>About Consumer</StyledTitle>
      <Button style={{ marginBottom: 60, marginTop: 20 }} size={14} onPress={() => handleGoOut()}>
        SAIR
      </Button>
    </StyledContainer>
  );
};

export default AboutConsumer;
