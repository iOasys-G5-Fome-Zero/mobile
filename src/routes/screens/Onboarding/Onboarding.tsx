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
  StyledButtonNext
} from './style';

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
      data={data_onbording}
      renderNextButton={renderButtonNext}
      renderDoneButton={renderDone}
    />
  );
};

export default Onboarding;
