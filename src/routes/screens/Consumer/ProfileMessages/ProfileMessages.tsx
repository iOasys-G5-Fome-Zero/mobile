import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../../Routes';

// components
import { Header } from '../../../../components';
import {
  StyledContainer,
  StyledContainerScroll,
  StyledText,
  StyledInputSearch,
  StyledInput,
  StyledContainerProducerMessage,
  StyledPhoto,
  StyledColum
} from './styles';

const friends = ['Zé roberto', 'Carlos sanchez'];

type NavProps = NativeStackNavigationProp<MainStackParams, 'Chat'>;

const ProfileMessages: React.FC = () => {
  const [handleSearch, setHandleSearch] = useState('');
  const navigation = useNavigation<NavProps>();

  const returnCardProducerMessage = (name: string, index: number) => {
    return (
      <StyledContainerProducerMessage
        key={index}
        onPress={() => navigation.navigate('Chat', { name, pedido: 'Pedido 123AB', avatar: '' })}
      >
        <StyledColum style={{ width: '25%' }}>
          <StyledPhoto>
            <StyledText size={24}>{name[0]}</StyledText>
          </StyledPhoto>
        </StyledColum>
        <StyledColum style={{ width: '60%' }}>
          <StyledText style={{ marginBottom: 8 }} size={14} bold>
            {name}
          </StyledText>
          <StyledText size={14}>Pedido 123AB</StyledText>
        </StyledColum>
        <StyledText style={{ width: '15%' }}>15:30</StyledText>
      </StyledContainerProducerMessage>
    );
  };

  const returnInputSearch = () => {
    return (
      <StyledInputSearch>
        <Icon
          type='font-awesome'
          name='search'
          color='#262626'
          size={18}
          tvParallaxProperties={undefined}
        />
        <StyledInput onChangeText={setHandleSearch} placeholder='Buscar' />
      </StyledInputSearch>
    );
  };

  return (
    <StyledContainer>
      <Header title='Mensagens' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        {returnInputSearch()}
        {friends.map((name, index) => returnCardProducerMessage(name, index))}
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default ProfileMessages;
