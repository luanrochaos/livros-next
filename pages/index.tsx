// index.tsx

import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
