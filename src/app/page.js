 // src/app/page.js
import Head from 'next/head';
import Link from 'next/link';
import styles from './home.module.css'; // Ajusta la ruta según tu estructura de proyecto

const fetchFeaturedCharacters = async () => {
  // Puedes ajustar esto según los datos que quieras mostrar
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results.slice(0, 5); // Obtén los primeros 5 personajes para destacar
};

const Home = async () => {
  const featuredCharacters = await fetchFeaturedCharacters();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Our Website</title>
        <meta name="description" content="Welcome to our website. Discover amazing content and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to Our Website</h1>
        <p>Explore amazing characters and stories from Rick and Morty!</p>
      </header>

      <main className={styles.main}>
        <h2>Featured Characters</h2>
        <ul className={styles.characterList}>
          {featuredCharacters.map(character => (
            <li key={character.id} className={styles.characterItem}>
              <Link href={`/blog/${character.id}`} className={styles.link}>
                <img src={character.image} alt={character.name} className={styles.characterImage} />
                <h3>{character.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
