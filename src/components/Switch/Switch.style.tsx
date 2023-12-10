import styled from 'styled-components';

export const ContentSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${({ theme }) => (theme.title === 'light' ? '#747272' : '#fff')};
  border-radius: 50%;
  padding: 0.8rem;

  cursor: pointer;

  img {
    width: 100%;
  }
`;
