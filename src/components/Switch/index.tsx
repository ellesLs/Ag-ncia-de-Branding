import * as S from './Switch.style';
import IconMoon from '/assets/moon.png';
import IconSun from '/assets/sun.png';
import { useTheme } from 'styled-components';

type SwitchProps = {
  onToggle(): void;
};

export function Switch({ onToggle: toggleTheme }: SwitchProps) {
  const theme = useTheme();

  return (
    <S.ContentSwitch onClick={toggleTheme}>
      <img
        src={theme.title === 'light' ? IconMoon : IconSun}
        alt="Agência Digital"
        title="Switch Theme"
      />
    </S.ContentSwitch>
  );
}
