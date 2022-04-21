import React from 'react';
import { Dimensions } from 'react-native';
import { useAppSelector } from '../../../../store/store';

// mocks
import { data_presentation, data_our_services, data_ongs } from '../../../../services/mocks';

// components
import { Header, CardList } from '../../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledSwiperImage,
  StyledCardSwiper,
  StyledText,
  StyledSwiperContent,
  StyledSwiper,
  StyledMainContain
} from './styles';

const { height } = Dimensions.get('window');

const HomeConsumer: React.FC = () => {
  const user = useAppSelector(state => state.userReducer.user);

  const returnCardSwiper = ({ image, index }) => {
    return (
      <StyledCardSwiper activeOpacity={0.8} key={index}>
        <StyledSwiperImage
          key={index}
          source={image}
          style={{ width: '100%', height: height * 0.25 }}
          resizeMode='cover'
        />
        <StyledSwiperContent style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <StyledText size={21} textAlign='right' color='#00843F' bold>
            Faça sua{'\n'}assinatura!
          </StyledText>
          <StyledText textAlign='right' color='#3A3A3A' bold>
            Produtos fresquinhos de{'\n'}produtores locais toda{'\n'}semana na sua mesa.
          </StyledText>
        </StyledSwiperContent>
      </StyledCardSwiper>
    );
  };

  return (
    <StyledContainer>
      <Header title={user.firstName} welcome message />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledSwiper
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          indicatorStyle='white'
        >
          {data_presentation.map(({ image }, index) => returnCardSwiper({ image, index }))}
        </StyledSwiper>
        <StyledMainContain>
          <StyledText size={16} bold style={{ marginBottom: 10 }}>
            Ajude no combate a fome
          </StyledText>
          <StyledText size={14} style={{ marginBottom: 30 }}>
            Veja abaixo as instituições e projetos cadastrados na nossa rede e ajude-nos a atingir a
            meta do mês doando suas moedas que serão convertidas em alimentos.
          </StyledText>
          <CardList data={data_ongs} columns={2} />
        </StyledMainContain>
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default HomeConsumer;
