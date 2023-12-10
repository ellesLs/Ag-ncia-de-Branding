import styled from 'styled-components';

export const ContainerHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sectionColor};
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding-block: 1.5rem;
`;

export const SwitchContainer = styled.div`
  width: 40px;
  height: 40px;
`;
