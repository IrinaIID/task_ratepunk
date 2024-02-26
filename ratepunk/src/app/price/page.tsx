import Footer from "../components/footer/footer";
import Header from "../components/header/heder";
import styles from './page.module.scss';


export default function Price() {
  return (
    <div className={styles.allPrice}>
      <Header />
      <main className={styles.mainPrice}>
        <h1 className={styles.priceTitl}>PRICE RATEPUNK</h1>
      </main>
      <Footer />
    </div>
  );
}