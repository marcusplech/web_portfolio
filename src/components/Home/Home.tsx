import TechStack from 'components/TechStack';
import Landing from 'components/Landing';
import Portfolio from 'components/Portfolio';
import Top from 'components/Top';

import styles from '../Home/Home.module.css'

const Home = () => {

  return (
    <main className={styles.main}>
      <div>
        <Landing />
        <TechStack />
      </div>
      <Portfolio />
      <Top />
    </main>
  );
};

export default Home;
