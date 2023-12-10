import * as S from './SocialNetworkList.styles';
import { SocialNetworkItem } from '../SocialNetworkItem';

export function SocialNetworkList() {
  return (
    <S.ContainerList>
      <SocialNetworkItem IconImage="/assets/facebook.png" iconName="Facebook" />
      <SocialNetworkItem IconImage="/assets/twitter.png" iconName="Twitter" />
      <SocialNetworkItem IconImage="/assets/linkedin.png" iconName="Linkedin" />
      <SocialNetworkItem IconImage="/assets/dribble.png" iconName="Dribble" />
      <SocialNetworkItem IconImage="/assets/behance.png" iconName="Behance" />
      <SocialNetworkItem IconImage="/assets/google-plus.png" iconName="Google plus" />
    </S.ContainerList>
  );
}
