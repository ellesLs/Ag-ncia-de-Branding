import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  /* padding-top: 3rem; */
`;

export const ContentFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  padding-block: 4.5rem;
`;

export const InfoFooter = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  p {
    text-align: center;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const Bottom = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  border-top: 1px solid ${({ theme }) => theme.colors.sectionColor};
  text-align: center;
  padding-block: 1.5rem;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.yellowColor};
  }
`;
