import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../../../store/store';
import { MainStackParams } from '../../../Routes';
import { BottomTabProducerParams } from '../../../tabs/ProducerTabNavigator';

// components
import { Header, Button } from '../../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledTitle,
  StyledContainerCestas,
  StyledText,
  StyledBigButton,
  StyledButtonText
} from './styles';

type TabNavProps = NativeStackNavigationProp<BottomTabProducerParams, 'FinancialProducer'>;
type StackNavProps = NativeStackNavigationProp<MainStackParams, 'BasketProducer'>;

const HomeProducer: React.FC = () => {
  const tabNavigation = useNavigation<TabNavProps>();
  const stackNavigation = useNavigation<StackNavProps>();

  const user = useAppSelector(state => state.userReducer.user);
  const returnFinancas = () => {
    return (
      <StyledContainerCestas>
        <StyledText textAlign='center'>
          Configure quais os tipos e tamanhos de cesta de alimentos você deseja fornecer.
        </StyledText>
        <Button
          style={{ backgroundColor: '#00843F', alignSelf: 'center', marginBottom: 0 }}
          size={14}
          onPress={() => stackNavigation.navigate('BasketProducer')}
        >
          Minhas Cestas
        </Button>
      </StyledContainerCestas>
    );
  };
  return (
    <StyledContainer>
      <Header title={user.firstName} welcome message />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledTitle size={16} bold>
          Minhas cestas
        </StyledTitle>
        {returnFinancas()}
        <StyledTitle size={16} bold>
          Minhas finanças
        </StyledTitle>
        <StyledBigButton
          activeOpacity={0.7}
          onPress={() => tabNavigation.navigate('FinancialProducer')}
        >
          <StyledButtonText>Veja agora os seus rendimentos</StyledButtonText>
        </StyledBigButton>
        <StyledBigButton
          activeOpacity={0.7}
          onPress={() => tabNavigation.navigate('FinancialProducer')}
        >
          <StyledButtonText>Cadastre aqui a sua chave Pix</StyledButtonText>
        </StyledBigButton>
      </StyledContainerScroll>
    </StyledContainer>
  );
};
export default HomeProducer;
