import styled from 'styled-components/native';

import {
  StyledContainer as Container,
  StyledContainerScroll as Scroll,
  StyledText as Text
} from '../HomeProducer/styles';

export const StyledContainer = styled(Container)``;
export const StyledContainerScroll = styled(Scroll)`
  padding: 100px 0 40px 0;
`;

export const StyledText = styled(Text)``;

export const StyledContainerWallet = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledContainerPix = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledContainerInfoPix = styled.View`
  width: auto;
  flex-direction: row;
`;
