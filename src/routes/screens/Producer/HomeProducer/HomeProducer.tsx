import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../../../store/store';
import { MainStackParams } from '../../../Routes';
import { TabProducerStackParams } from '../../../Tabs/ProducerTabNavigator';

// components
import { Header, Button } from '../../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledContainerCestas,
  StyledText,
  StyledButtonNext,
  StyledButtonText
} from './styles';

type TabNavProps = NativeStackNavigationProp<TabProducerStackParams, 'FinancialProducer'>;
type StackNavProps = NativeStackNavigationProp<MainStackParams, 'BasketProducer'>;

const HomeProducer: React.FC = () => {
  const tabNavigation = useNavigation<TabNavProps>();
  const stackNavigation = useNavigation<StackNavProps>();

  const user = useAppSelector(state => state.userReducer.user);
  const returnFinancas = () => {
    return (
      <StyledContainerCestas>
        <StyledText>
          Configure quais os tipos e tamanhos de cesta de alimentos você deseja fornecer.
        </StyledText>
        <Button
          style={{ backgroundColor: '#00843F', alignSelf: 'center' }}
          size={14}
          onPress={() => stackNavigation.navigate('BasketProducer')}
        >
          Minhas Cestas
        </Button>
      </StyledContainerCestas>
    );
  };
  return (
    <>
      <Header title={user.firstName} />
      <StyledContainer>
        <StyledTitle size={16} bold>
          Minhas cestas
        </StyledTitle>
        {returnFinancas()}
        <StyledTitle size={16} bold>
          Minhas finanças
        </StyledTitle>
        <StyledButtonNext onPress={() => tabNavigation.navigate('FinancialProducer')}>
          <StyledButtonText>Veja agora os seus rendimentos</StyledButtonText>
        </StyledButtonNext>
        <StyledButtonNext>
          <StyledButtonText>Cadastre aqui a sua chave Pix</StyledButtonText>
        </StyledButtonNext>
      </StyledContainer>
    </>
  );
};
export default HomeProducer;
