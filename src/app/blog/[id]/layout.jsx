 // blog/[id]/layout.jsx
import styles from './layout.module.css'; 

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Characters</h1>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
