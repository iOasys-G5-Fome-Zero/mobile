import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../Routes';
import { useAppSelector } from '../../../store/store';

// mocks
import { data_onbording } from '../../../services/mocks';

// components
import {
  StyledContainer,
  StyledImage,
  StyledText,
  StyledButton,
  StyledButtonText,
  StyledButtonNext,
  StyledContainerTextContain
} from './styles';

type NavProps = NativeStackNavigationProp<
  MainStackParams,
  'ConsumerTabNavigator' | 'ProducerTabNavigator'
>;

const Onboarding = () => {
  const navigation = useNavigation<NavProps>();
  const user = useAppSelector(state => state.userReducer.user);

  const renderItem = ({ item }) => {
    return (
      <StyledContainer>
        <StyledImage source={item.image} resizeMode='cover' />
        <StyledContainerTextContain>
          <StyledText title size={21} bold>
            {item.title}
          </StyledText>
          <StyledText size={14}>{item.text}</StyledText>
        </StyledContainerTextContain>
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
        <StyledButtonText>Finalizar</StyledButtonText>
      </StyledButton>
    );
  };

  const renderPrevButtom = () => {
    return (
      <StyledButtonNext style={{ backgroundColor: 'transparent' }}>
        <StyledButtonText style={{ color: '#00843F', fontSize: 14, fontWeight: 'bold' }}>
          Voltar
        </StyledButtonText>
      </StyledButtonNext>
    );
  };

  const renderSkipButton = () => {
    return (
      <StyledButtonNext style={{ backgroundColor: 'transparent' }}>
        <StyledButtonText style={{ color: '#00843F', fontSize: 14, fontWeight: 'bold' }}>
          Pular
        </StyledButtonText>
      </StyledButtonNext>
    );
  };

  return (
    <AppIntroSlider
      activeDotStyle={{ backgroundColor: '#00843F', width: 6, height: 6 }}
      dotStyle={{ backgroundColor: '#45C259', width: 6, height: 6 }}
      renderItem={renderItem}
      data={data_onbording}
      showPrevButton
      showSkipButton
      renderPrevButton={renderPrevButtom}
      renderSkipButton={renderSkipButton}
      renderNextButton={renderButtonNext}
      renderDoneButton={renderDone}
    />
  );
};

export default Onboarding;
