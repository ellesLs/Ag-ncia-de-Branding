import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.2rem;
  flex: 1;

  box-shadow: 0 0 2px ${({ theme }) => theme.colors.textColor};
  padding: 6.5rem 2.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowColor};
    transition: all 0.6s ease-in-out;
    h4,
    p {
      color: ${({ theme }) => (theme.title === 'dark' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme.title === 'dark' ? '#fff' : '#000')};
    }
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;

  h4 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.subTitleColor};
  }

  span {
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 500;
    transition: all 0.6s ease-in-out;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  flex: 2;

  p {
    width: 100%;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: left;
    line-height: 2.6rem;
  }
`;
