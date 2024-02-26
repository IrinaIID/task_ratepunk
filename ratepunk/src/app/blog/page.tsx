import { Caveat_Brush } from "next/font/google";
import Footer from "../components/footer/footer";
import Header from "../components/header/heder";
import styles from './page.module.scss';


const caveat = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400']
});

export default function Blog() {
  return (
    <div className={styles.allBlog}>
      <Header />
      <main className={styles.mainBlog}>
        <h1 className={styles.blogTitl}>BLOG RATEPUNK</h1>
      </main>
      <Footer />
    </div>
  );
}