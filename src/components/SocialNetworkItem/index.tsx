import * as S from './SocialNetworkItem.styles';

type ItemProps = {
  IconImage: string;
  iconName: string;
  href?: string;
};

export function SocialNetworkItem({
  IconImage = '',
  iconName = 'Social Media',
  href = 'https://www.google.com/',
}: ItemProps) {
  return (
    <S.ContainerIcon>
      <a href={href} target="_blank">
        <img src={IconImage} alt={iconName} title={iconName} />
      </a>
    </S.ContainerIcon>
  );
}
