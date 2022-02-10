import Projects from '../components/Projects/Projects';
import Educational from '../components/Educational/Educational';
import Zeca from '../components/Zeca/Zeca';
import { Layout } from '../layout/Layout';
import Manu from '../components/Manu/Manu';
import Petwork from '../components/Petwork/Petwork';

const Home = () => {
  return (
    <Layout>
      <Projects />
      <Zeca />
      <Petwork/>
      <Manu />
      <Educational />
    </Layout>
  );
};

export default Home;
