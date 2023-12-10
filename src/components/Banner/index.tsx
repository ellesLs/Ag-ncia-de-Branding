import * as S from './Banner.styles';

export function Banner() {
  return (
    <S.BannerContainer>
      <S.ImageBannerContainer>
        <img src="/assets/banner.png" alt="banner" />
      </S.ImageBannerContainer>
      <S.ContentBanner>
        <small>BRANDING / UI / UX / TECNOLOGIA</small>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </S.ContentBanner>
    </S.BannerContainer>
  );
}
