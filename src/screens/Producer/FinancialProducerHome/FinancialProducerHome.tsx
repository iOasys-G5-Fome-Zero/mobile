import React from 'react';
import { Icon } from 'react-native-elements';
import { TabActions, useNavigation } from '@react-navigation/native';
import { useGetMyWalletInfo } from '../../../hooks';

// icons
import PiggyBankIcon from '../../../assets/icons/piggy-bank.svg';

// components
import { Header, Button } from '../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledText,
  StyledContainerWallet,
  StyledContainerPix,
  StyledContainerInfoPix
} from './styles';

// interfaces
interface INav {
  title: string;
  goTo: string;
}

const FinancialProducer: React.FC = () => {
  const navigation = useNavigation();
  const wallet = useGetMyWalletInfo();

  const handleNavigate = (screen: string) => {
    const jumpToSignFood = TabActions.jumpTo(screen);

    navigation.dispatch(jumpToSignFood);
  };

  const returnIconKeyPix = (key: string) => {
    switch (key) {
      case 'phonePix':
        return (
          <Icon
            style={{ marginRight: 10 }}
            type='feather'
            name='smartphone'
            color='#00843F'
            size={20}
            tvParallaxProperties={undefined}
          />
        );

      case 'cpfPix':
        return (
          <Icon
            style={{ marginRight: 10 }}
            type='feather'
            name='mail'
            color='#00843F'
            size={20}
            tvParallaxProperties={undefined}
          />
        );
      case 'emailPix':
        return (
          <Icon
            style={{ marginRight: 10 }}
            type='feather'
            name='mail'
            color='#00843F'
            size={20}
            tvParallaxProperties={undefined}
          />
        );
      case 'randomPix':
        return (
          <Icon
            style={{ marginRight: 10 }}
            type='material'
            name='vpn-key'
            color='#262626'
            size={20}
            tvParallaxProperties={undefined}
          />
        );
      default:
        break;
    }
  };

  const returnBigButtons = (nav: INav, index: number) => {
    return (
      <Button
        key={index}
        style={{ marginBottom: 10, width: '100%', paddingHorizontal: 20 }}
        size={14}
        fontColor='#262626'
        iconType='material'
        iconName='arrow-forward-ios'
        iconColor='#262626'
        iconSize={16}
        big
        onPress={() => handleNavigate(nav.goTo)}
      >
        {nav.title}
      </Button>
    );
  };

  return (
    <StyledContainer>
      <Header title='Financeiro' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledContainerWallet>
          <PiggyBankIcon height={100} width={100} />
          <StyledText style={{ marginBottom: 0 }} size={21} bold>
            Saldo disponível
          </StyledText>
          <StyledText style={{ marginBottom: 50 }} size={28} bold>
            {wallet ? `R$ ${wallet.balance}` : 'R$ 0,00'}
          </StyledText>
        </StyledContainerWallet>
        {[
          { title: 'Configurar chave pix', goTo: 'FinancialProducerRegisterPix' },
          { title: 'Ver extrato', goTo: 'FinancialProducerExtract' }
        ].map((nav: INav, index: number) => returnBigButtons(nav, index))}

        <StyledText style={{ marginTop: 20 }} size={14} bold>
          Chaves cadastradas:
        </StyledText>
        {wallet
          ? Object.values(wallet).map((item, index) => {
              const keys = Object.keys(wallet);

              if (item && keys[index] !== 'balance') {
                return (
                  <StyledContainerPix style={{ marginBottom: 20, alignItems: 'center' }}>
                    <StyledContainerInfoPix
                      style={{
                        alignItems: 'center'
                      }}
                    >
                      {returnIconKeyPix(keys[index])}
                      <StyledText size={14} style={{ marginBottom: 0 }}>
                        {item}
                      </StyledText>
                    </StyledContainerInfoPix>
                    <Icon
                      type='feather'
                      name='trash-2'
                      color='#00843F'
                      size={20}
                      tvParallaxProperties={undefined}
                    />
                  </StyledContainerPix>
                );
              }

              return null;
            })
          : null}
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default FinancialProducer;
