import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useAppDispatch } from '../../store/store';

// mocks
import { data_onbording } from '../../services/mocks';

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
import { setLogged } from '../../store';

const Onboarding = () => {
  const dispatch = useAppDispatch();

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
          dispatch(setLogged(true));
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
