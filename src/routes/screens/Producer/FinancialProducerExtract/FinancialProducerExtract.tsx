import React from 'react';

// components
import { Header } from '../../../../components';
import { StyledContainer, StyledContainerScroll, StyledText } from './styles';

const FinancialProducerExtract = () => {
  return (
    <StyledContainer>
      <Header title='Extrato' />
      <StyledContainerScroll showsVerticalScrollIndicator={false}>
        <StyledText style={{ marginBottom: 0 }} size={21} bold>
          Producer Extract
        </StyledText>
      </StyledContainerScroll>
    </StyledContainer>
  );
};

export default FinancialProducerExtract;
