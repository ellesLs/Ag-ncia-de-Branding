import * as S from './Card.styles';

type CardProps = {
  date: string;
  title: string;
  company: string;
  text: string;
};

export function Card({ date, title, company, text }: CardProps) {
  return (
    <S.CardContainer>
      <S.CardInfo>
        <span>{date}</span>
        <h4>{title}</h4>
        <span>{company}</span>
      </S.CardInfo>
      <S.TextContainer>
        <p>{text}</p>
      </S.TextContainer>
    </S.CardContainer>
  );
}
