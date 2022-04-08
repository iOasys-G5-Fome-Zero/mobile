import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

// components
import { Header, Button } from '../../../../components';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerCestas,
  StyledSaveCestas,
  StyledSaveCestasText,
  StyledSaveCestasTitle
} from './styles';

const BasketProducer: React.FC = () => {
  // const user = useAppSelector(state => state.userReducer.user);
  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
    setChecked(status => !status);
  };

  const returnBasket = () => {
    return (
      <>
        <StyledContainerCestas>
          <StyledSaveCestas>
            <CheckBox onPress={handleCheckBox} checkedColor='#00843F' size={35} {...{ checked }} />
            <StyledSaveCestasTitle>Pequena</StyledSaveCestasTitle>
            <StyledSaveCestasText>1 tempero, 2 legumes, 2 verduras , 3 frutas</StyledSaveCestasText>
          </StyledSaveCestas>
        </StyledContainerCestas>
        <StyledContainerCestas>
          <StyledSaveCestas>
            <CheckBox onPress={handleCheckBox} checkedColor='#00843F' size={35} {...{ checked }} />
            <StyledSaveCestasTitle>Média</StyledSaveCestasTitle>
            <StyledSaveCestasText>
              2 temperos, 3 legumes, 3 verduras e 3 frutas
            </StyledSaveCestasText>
          </StyledSaveCestas>
        </StyledContainerCestas>
        <StyledContainerCestas>
          <StyledSaveCestas>
            <CheckBox onPress={handleCheckBox} checkedColor='#00843F' size={35} {...{ checked }} />
            <StyledSaveCestasTitle>Grande</StyledSaveCestasTitle>
            <StyledSaveCestasText>
              3 temperos, 4 legumes, 4 verduras e 4 frutas
            </StyledSaveCestasText>
          </StyledSaveCestas>
        </StyledContainerCestas>
        <Button
          style={{ backgroundColor: '#00843F', alignSelf: 'center' }}
          size={14}
          onPress={() => null}
        >
          Confirmar Seleção
        </Button>
      </>
    );
  };
  return (
    <>
      <Header title='Minhas Cestas' />
      <StyledContainer>
        <StyledTitle size={14} bold>
          Escolha abaixo qual o tamanho da cesta você deseja fornecer, e veja quantos e quais os
          tipos de alimentos em cada uma.
        </StyledTitle>
        <StyledText>Obs: Você pode selecionar mais de um tamanho</StyledText>
        {returnBasket()}
      </StyledContainer>
    </>
  );
};

export default BasketProducer;
