import React from 'react';

// icons
import MessageIcon from '../../assets/icons/message-icon.svg';

// components
import { StyledContainer, StyledText } from './styled';

// types

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <StyledContainer style={{ elevation: 20 }}>
      <StyledText>{`Olá ${title}!`}</StyledText>
      <MessageIcon />
    </StyledContainer>
  );
};

export default Header;
