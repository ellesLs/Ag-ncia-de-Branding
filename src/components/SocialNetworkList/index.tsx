import * as S from './SocialNetworkList.styles';
import { SocialNetworkItem } from '../SocialNetworkItem';

export function SocialNetworkList() {
  return (
    <S.ContainerList>
      <SocialNetworkItem
        IconImage="/assets/facebook.png"
        iconName="Facebook"
        href="https://www.facebook.com"
      />
      <SocialNetworkItem
        IconImage="/assets/twitter.png"
        iconName="Twitter"
        href="https://www.twitter.com"
      />
      <SocialNetworkItem
        IconImage="/assets/linkedin.png"
        iconName="Linkedin"
        href="https://www.linkedin.com"
      />
      <SocialNetworkItem
        IconImage="/assets/dribble.png"
        iconName="Dribble"
        href="https://dribbble.com/"
      />
      <SocialNetworkItem
        IconImage="/assets/behance.png"
        iconName="Behance"
        href="https://www.behance.net"
      />
      <SocialNetworkItem IconImage="/assets/google-plus.png" iconName="Google plus" />
    </S.ContainerList>
  );
}
