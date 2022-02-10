import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Educational from '../components/Educational/Educational';
import Zeca from '../components/Zeca/Zeca';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Manu from '../components/Manu/Manu';
import Petwork from '../components/Petwork/Petwork';

const Home = () => {
  return (
    <Layout>
      <Projects />
      <Zeca />
      <Manu />
      <Educational />
      <Petwork/>
    </Layout>
  );
};

export default Home;
