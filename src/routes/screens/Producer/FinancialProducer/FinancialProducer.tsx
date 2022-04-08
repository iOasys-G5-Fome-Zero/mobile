import React from 'react';
import { Header, Button } from '../../../../components';
// components
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledButtonNext,
  StyledButtonText,
  StyledContainerChaves,
  StyledTextChaves
} from './styles';

const FinancialProducer: React.FC = () => {
  const returnButtons = () => {
    return (
      <>
        <StyledButtonNext>
          <StyledButtonText>Configurar chave pix</StyledButtonText>
        </StyledButtonNext>
        <StyledButtonNext>
          <StyledButtonText>Cadastre aqui a sua chave Pix</StyledButtonText>
        </StyledButtonNext>
      </>
    );
  };
  return (
    <>
      <Header title='Financeiro' />
      <StyledContainer>
        <StyledTitle bold>Saldo Disponível</StyledTitle>
        <StyledText>R$ 00,00</StyledText>
        {returnButtons()}
        <StyledContainerChaves>
          <StyledTextChaves> Chaves Cadastradas </StyledTextChaves>
        </StyledContainerChaves>
      </StyledContainer>
    </>
  );
};

export default FinancialProducer;
