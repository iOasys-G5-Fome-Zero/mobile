import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledContentModal = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 20px;
  padding: 20px 16px;
`;
