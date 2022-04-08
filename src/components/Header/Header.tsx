import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

// icons
import MessageIcon from '../../assets/icons/message-icon.svg';

// components
import { StyledContainer, StyledText, StyledRow } from './styled';

// types

interface IHeaderProps {
  title: string;
  welcome?: boolean;
  size?: number;
}

const Header: React.FC<IHeaderProps> = ({ title, welcome = false, size = 21 }) => {
  const navigation = useNavigation();

  return (
    <StyledContainer style={{ elevation: 20 }}>
      <StyledRow>
        {!welcome && (
          <Icon
            type='feather'
            name='arrow-left'
            size={24}
            color='#262626'
            onPress={() => navigation.goBack()}
            tvParallaxProperties={undefined}
          />
        )}
        <StyledText size={size} iconLeft={welcome}>
          {welcome ? `Olá ${title}!` : title}
        </StyledText>
      </StyledRow>
      <MessageIcon />
    </StyledContainer>
  );
};

export default Header;
