import React from 'react';
import { Modal as ModalView } from 'react-native';

import { StyledContainer, StyledContentModal } from './styles';

interface IProps {
  isVisible: boolean;
}

const Modal: React.FC<IProps> = ({ isVisible, children }) => {
  return (
    <ModalView visible={isVisible} animationType='slide' transparent>
      <StyledContainer style={{ elevation: 5 }}>
        <StyledContentModal>{children}</StyledContentModal>
      </StyledContainer>
    </ModalView>
  );
};

export default Modal;
