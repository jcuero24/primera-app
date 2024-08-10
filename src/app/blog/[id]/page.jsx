// src/app/blog/[id]/page.jsx
import { notFound } from 'next/navigation';
import Head from 'next/head';
import Layout from './layout';
import styles from './character.module.css';  

const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
};

const BlogPost = async ({ params }) => {
  const { id } = params;
  const character = await fetchCharacter(id);

  if (!character) {
    notFound();
  }

  return (
    <Layout>
      <div className={styles.characterContainer}>
        <Head>
          <title>{character.name}</title>
          <meta name="description" content={`Details about ${character.name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.characterMain}>
          <img src={character.image} alt={character.name} className={styles.characterImage} />
          <h1 className={styles.characterName}>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </main>
      </div>
    </Layout>
  );
};

export default BlogPost;
