import { Area } from '../Area';
import { Logo } from '../Logo';
import { SocialNetworkList } from '../SocialNetworkList';
import * as S from './Footer.styles';
export function Footer() {
  return (
    <S.ContainerFooter>
      <Area>
        <S.ContentFooter>
          <S.InfoFooter>
            <Logo />
            <p>
              Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online
              utilizando estratégias, ferramentas e tecnologias personalizadas.
            </p>
          </S.InfoFooter>
          <SocialNetworkList />
        </S.ContentFooter>
      </Area>
      <S.Bottom>
        <p>
          Copyright {new Date().getFullYear()} &copy; <span>Elles</span>
        </p>
      </S.Bottom>
    </S.ContainerFooter>
  );
}
