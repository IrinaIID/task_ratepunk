import Header from "../components/header/heder";
import styles from './page.module.scss';

export default function Blog() {
  return (
    <main className={styles.mainBlog}>
      <Header />
      <p>BLOg</p>
    </main>
  );
}