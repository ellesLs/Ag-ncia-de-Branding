import * as S from './Switch.style';
import IconMoon from '/assets/moon.png';
import IconSun from '/assets/sun.png';
import { DefaultTheme } from 'styled-components';

type SwitchProps = {
  toggle(): void;
  theme: DefaultTheme;
};

export function Switch({ toggle: toggleTheme, theme }: SwitchProps) {
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
