import React from 'react';
import { Area } from '../Area';
import { Logo } from '../Logo';
import * as S from './Header.styles';

type headerProps = {
  IconSwitch: React.ReactNode;
};

export function Header({ IconSwitch }: headerProps) {
  return (
    <S.ContainerHeader>
      <Area>
        <S.ContentHeader>
          <Logo />
          <S.SwitchContainer>{IconSwitch}</S.SwitchContainer>
        </S.ContentHeader>
      </Area>
    </S.ContainerHeader>
  );
}
