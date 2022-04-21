import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { useAppSelector } from '../../store/store';

// icons
import PenIcon from '../../assets/icons/pen-icon.svg';

// components
import {
  StyledContainer,
  StyledText,
  StyledRow,
  StyledHeaderProfile,
  StyledDefaultPhoto,
  StyledButtonEditProfile
} from './styled';

// types
interface IHeaderProps {
  title: string;
  welcome?: boolean;
  size?: number;
  profile?: boolean;
  nav?: any;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  welcome = false,
  size = 21,
  nav = null,
  profile = false
}) => {
  const navigation = useNavigation();
  const user = useAppSelector(state => state.userReducer.user);

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
