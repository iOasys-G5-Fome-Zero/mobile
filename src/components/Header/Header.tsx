import React from 'react';
import { useNavigation, TabActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../store/store';
import { BottomTabConsumerParams } from '../../routes/tabs/ConsumerTabNavigator';
import { BottomTabProducerParams } from '../../routes/tabs/ProducerTabNavigator';

// icons
import PenIcon from '../../assets/icons/pen-icon.svg';
import MessageIcon from '../../assets/icons/message-icon.svg';

// components
import {
  StyledContainer,
  StyledText,
  StyledRow,
  StyledHeaderProfile,
  StyledDefaultPhoto,
  StyledButtonEditProfile,
  StyledBaseButton
} from './styled';

// types

interface IHeaderProps {
  title: string;
  welcome?: boolean;
  size?: number;
  profile?: boolean;
  nav?: any;
  message?: boolean;
}

type NavBottomTabProducerProps = NativeStackNavigationProp<
  BottomTabProducerParams,
  'ProfileProducer'
>;
type NavBottomTabConsumerProps = NativeStackNavigationProp<
  BottomTabConsumerParams,
  'ProfileConsumer'
>;

const Header: React.FC<IHeaderProps> = ({
  title,
  welcome = false,
  size = 21,
  nav = null,
  profile = false,
  message = false
}) => {
  const navigation = useNavigation();
  const navigationBottomTabProducer = useNavigation<NavBottomTabProducerProps>();
  const navigationBottomTabConsumer = useNavigation<NavBottomTabConsumerProps>();
  const user = useAppSelector(state => state.userReducer.user);

  const handleNavigationMessage = () => {
    const type = user.userType;

    if (type === 'consumer') {
      navigationBottomTabConsumer.navigate('ProfileConsumer');
      const jumpToSignFood = TabActions.jumpTo('ProfileConsumerMessages');
      navigation.dispatch(jumpToSignFood);
    }

    if (type === 'producer') {
      navigationBottomTabProducer.navigate('ProfileProducer');
      const jumpToSignFood = TabActions.jumpTo('ProfileProducerMessages');
      navigation.dispatch(jumpToSignFood);
    }
  };

  return (
    <>
      <StyledContainer style={{ elevation: profile ? 0 : 20 }}>
        <StyledRow>
          {!welcome && (
            <Icon
              type='feather'
              name='arrow-left'
              size={24}
              color='#262626'
              onPress={() => {
                if (nav) {
                  nav();
                } else {
                  navigation.goBack();
                }
              }}
              tvParallaxProperties={undefined}
            />
          )}
          <StyledText size={size} iconLeft={welcome}>
            {welcome ? `Olá ${title}!` : title}
          </StyledText>
        </StyledRow>
        {message && (
          <StyledBaseButton onPress={() => handleNavigationMessage()}>
            <MessageIcon />
          </StyledBaseButton>
        )}
      </StyledContainer>
      {profile && (
        <>
          <StyledHeaderProfile />
          <StyledDefaultPhoto style={{ elevation: 5 }}>
            <StyledText size={36} iconLeft>
              {user.firstName[0]}
            </StyledText>
            <StyledButtonEditProfile activeOpacity={0.8}>
              <PenIcon />
            </StyledButtonEditProfile>
          </StyledDefaultPhoto>
        </>
      )}
    </>
  );
};

export default Header;
