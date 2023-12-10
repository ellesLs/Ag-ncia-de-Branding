import { Area } from '../Area';
import { Card } from '../Card';
import * as S from './Section.styles';

export function SectionExperienceWorks() {
  return (
    <S.SectionContainer>
      <Area>
        <S.SectionContent>
          <h3>Experiências De Trabalho</h3>
          <S.TextSection>
            Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing
            Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos
            nossos clientes.
          </S.TextSection>
          <section>
            <Card
              date="JUNHO 2012 - 2016"
              title="Web Designer"
              company="Pied Piper StartUp."
              text="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores."
            />
            <Card
              date="AGOSTO 2016 - 2019"
              title="Product Designer"
              company="E Corp."
              text="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, impactando-o no momento certo."
            />
            <Card
              date="FEVEREIRO 2019 - 2021"
              title="Digital Consulting"
              company="Arasaka Inc."
              text="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução do plano de ação."
            />
          </section>
        </S.SectionContent>
      </Area>
    </S.SectionContainer>
  );
}
