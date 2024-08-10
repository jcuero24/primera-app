 // src/app/blog/page.jsx
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/Blog.module.css'; // Ajusta la ruta según la estructura de tu proyecto

const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
};

const Blog = async () => {
  const characters = await fetchCharacters();

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="List of blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog Posts</h1>
        <ul className={styles.list}>
          {characters.map((character) => (
            <li key={character.id} className={styles.item}>
              <Link href={`/blog/${character.id}`} className={styles.link}>
                {character.name}
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

export default Blog;
