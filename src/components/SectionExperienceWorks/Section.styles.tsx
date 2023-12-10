import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sectionColor};
  padding-block: 9rem;
`;

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  h3 {
    font-size: 4.5rem;
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.subTitleColor};

    &::before {
      content: '';
      width: 20%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.yellowColor};
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      /* left: calc(100% - 40% - 20%); */
    }

    @media screen and (max-width: 375px) {
      &::before {
        content: '';
        width: 30%;
        height: 4px;
        /* left: calc(100% - 30% - 35%); */
      }
    }
  }

  section {
    width: 100%;
    display: flex;
    margin-top: 2.5rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const TextSection = styled.p`
  max-width: 750px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
`;
