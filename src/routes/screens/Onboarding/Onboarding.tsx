import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MainStackParams } from '../../Routes';
import { useAppSelector } from '../../../store/store';
import {
  StyledContainer,
  StyledTitle,
  StyledImage,
  StyledText,
  StyledButton,
  StyledButtonText,
  StyledButtonNext
} from './style';
import onboarding1 from '../../../assets/images/Onboarding/Onboarding_1.jpg';
import onboarding2 from '../../../assets/images/Onboarding/Onboarding_2.jpg';
import onboarding3 from '../../../assets/images/Onboarding/Onboarding_3.jpg';

type NavProps = NativeStackNavigationProp<
  MainStackParams,
  'ConsumerTabNavigator' | 'ProducerTabNavigator'
>;

const slides = [
  {
    key: 'one',
    title: 'Uma forma fácil de se \n conectar aos consumidores',
    text: 'Através do nosso aplicativo você poderá vender seus \nalimentos para a comunidade local, sem depender de \n atravessadores.',
    image: onboarding1,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'two',
    title: 'Nós prezamos pela agricultura familiar',
    text: 'Você como agricultor, que não usa agrotóxicos e\n que preza pelo meio ambiente, tem um papel\n importante na alimentação das pessoas.',
    image: onboarding2,
    backgroundColor: '#febe29'
  },
  {
    key: 'three',
    title: 'Cesta Solidária',
    text: 'Sendo um produtor credenciado, além de vender\n localmente, você também ajuda e incentiva doações\n para pessoas em situação de fome.',
    image: onboarding3,
    backgroundColor: '#22bcb5'
  }
];

const Onboarding = () => {
  const navigation = useNavigation<NavProps>();
  const user = useAppSelector(state => state.userReducer.user);
  const [onDone, setOnDone] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <StyledContainer>
        <StyledText size={21} bold>
          {item.title}
        </StyledText>
        <StyledText size={14}>{item.text}</StyledText>
        <StyledImage source={item.image} />
      </StyledContainer>
    );
  };
  const renderButtonNext = () => {
    return (
      <StyledButtonNext>
        <StyledButtonText>Próximo</StyledButtonText>
      </StyledButtonNext>
    );
  };
  const renderDone = () => {
    return (
      <StyledButton
        onPress={() => {
          if (user.userType === 'consumer') {
            navigation.navigate('ConsumerTabNavigator');
          }
          if (user.userType === 'producer') {
            navigation.navigate('ProducerTabNavigator');
          }
        }}
      >
        <StyledButtonText>Próximo</StyledButtonText>
      </StyledButton>
    );
  };
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderNextButton={renderButtonNext}
      renderDoneButton={renderDone}
    />
  );
};

export default Onboarding;
