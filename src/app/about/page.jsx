 // about/page.jsx
import Head from 'next/head';
import styles from './about.module.css'; 

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About page of our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About this</h1>
        <p className={styles.description}>
           API Rick and Morty characters :)
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
