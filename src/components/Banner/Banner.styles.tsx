import styled from 'styled-components';

export const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  height: 90vh;
`;

export const ImageBannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentBanner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bannerColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  padding-inline: 2rem;
  color: ${({ theme }) => theme.colors.titleColor};

  small {
    letter-spacing: 0.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  h2 {
    font-size: 5rem;
    font-weight: 600;
  }

  span {
    font-size: 5rem;
    font-weight: 900;
  }
`;
