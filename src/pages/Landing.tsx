import { DefaultTheme } from 'styled-components';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { SectionExperienceWorks } from '../components/SectionExperienceWorks';
import { Switch } from '../components/Switch';

type LandingProps = {
  toggle(): void;
  theme: DefaultTheme;
};

export default function Landing(props: LandingProps) {
  return (
    <>
      <Header IconSwitch={<Switch {...props} />} />
      <Main>
        <Banner />
        <SectionExperienceWorks />
      </Main>
      <Footer />
    </>
  );
}
