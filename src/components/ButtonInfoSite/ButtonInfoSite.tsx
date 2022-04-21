import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../routes/Routes';
import { setWeb } from '../../store';
import { useAppDispatch } from '../../store/store';

import Button from '../Form/Button/Button';
import { StyledContainerInfo, StyledText } from './styles';

const OUR_SITE = 'https://cestou.netlify.app/';

type NavProps = NativeStackNavigationProp<MainStackParams, 'WebView'>;

const ButtonInfoSite = () => {
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();

  return (
    <StyledContainerInfo>
      <StyledText size={14} margin>
        Para saber mais sobre os projetos e instituições que estamos ajudando, acesse o nosso site.
      </StyledText>
      <Button
        style={{
          width: 100,
          height: 40,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: '#00843F',
          marginBottom: 0
        }}
        size={12}
        fontColor='#262626'
        onPress={() => {
          dispatch(setWeb({ url: OUR_SITE, go: true }));
          navigation.navigate('WebView');
        }}
      >
        Ir para o site
      </Button>
    </StyledContainerInfo>
  );
};

export default ButtonInfoSite;
