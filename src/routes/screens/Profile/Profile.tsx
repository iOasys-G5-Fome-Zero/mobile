import React from 'react';
import { Dimensions } from 'react-native';
import { TabActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { resetGenericPassword } from 'react-native-keychain';
import { MainStackParams } from '../../Routes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setLogged } from '../../../store';
import { BottomTabConsumerParams } from '../../tabs/ConsumerTabNavigator';
import { BottomTabProducerParams } from '../../tabs/ProducerTabNavigator';

// components
import { Button, Header } from '../../../components';
import { StyledContainer, StyledContainerScroll, StyledText } from './styles';

// types
type NavProps = NativeStackNavigationProp<MainStackParams, 'Login'>;
type NavPropsConsumer = NativeStackNavigationProp<BottomTabConsumerParams, 'MyBasketConsumer'>;
type NavPropsProducer = NativeStackNavigationProp<BottomTabProducerParams, 'FinancialProducer'>;

const ProfileConsumer: React.FC = () => {
  const navigation = useNavigation<NavProps>();
  const navigationProducer = useNavigation<NavPropsProducer>();
  const navigationConsumer = useNavigation<NavPropsConsumer>();
  const user = useAppSelector(state => state.userReducer.user);
  const dispatch = useAppDispatch();

  const { width } = Dimensions.get('window');

  const handleGoOut = async () => {
    await resetGenericPassword({ service: 'refreshToken' });
    await resetGenericPassword({ service: 'accessToken' });

    dispatch(setLogged(false));
    navigation.navigate('Login');
  };

  const handleNavigate = () => {
    const type = user.userType;

    if (type === 'consumer') {
      const jumpToSignFood = TabActions.jumpTo('ProfileConsumerMessages');
      navigation.dispatch(jumpToSignFood);
    }

    if (type === 'producer') {
      const jumpToSignFood = TabActions.jumpTo('ProfileProducerMessages');
      navigation.dispatch(jumpToSignFood);
    }
  };

  const handleNavigatePlan = () => {
    const type = user.userType;

    if (type === 'consumer') {
      navigationConsumer.navigate('MyBasketConsumer');
    }

    if (type === 'producer') {
      navigationProducer.navigate('FinancialProducer');
    }
  };

  return (
    <StyledContainer>
      <Header title='Perfil' profile />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledText size={24} bold textAlign='center'>
          {user.firstName}
        </StyledText>
        <Button
          style={{ marginTop: 35, marginBottom: 10, width: width * 0.9, paddingHorizontal: 20 }}
          size={14}
          fontColor='#262626'
          iconType='material'
          iconName='arrow-forward-ios'
          iconColor='#262626'
          iconSize={16}
          big
          onPress={() => null}
        >
          Meus dados
        </Button>
        <Button
          style={{ marginBottom: 10, width: width * 0.9, paddingHorizontal: 20 }}
          size={14}
          fontColor='#262626'
          iconType='material'
          iconName='arrow-forward-ios'
          iconColor='#262626'
          iconSize={16}
          big
          onPress={() => handleNavigatePlan()}
        >
          Configurar plano
        </Button>
        <Button
          style={{ marginBottom: 10, width: width * 0.9, paddingHorizontal: 20 }}
          size={14}
          fontColor='#262626'
          iconType='material'
          iconName='arrow-forward-ios'
          iconColor='#262626'
          iconSize={16}
          big
          onPress={() => handleNavigate()}
        >
          Mensagens
        </Button>
        <Button
          style={{
            width: 120,
            height: 30,
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            marginTop: 50
          }}
          size={14}
          fontColor='#262626'
          iconType='feather'
          iconName='log-out'
          iconSize={16}
          onPress={() => handleGoOut()}
        >
          Sair da conta
        </Button>
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default ProfileConsumer;
