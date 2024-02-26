import { Caveat_Brush } from "next/font/google";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Header from './components/header/heder';
import PreFooter from "./components/pre-footer/pre-footer";
import Steps from "./components/steps-block/steps";
import styles from "./page.module.scss";


const caveat = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400']
});

export default function Home() {
  return (
    <div className={styles.allHome}>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.cardEmailBlock}>
          <h1 className={`${caveat.className} ${styles.cardName}`}>REFER FRIENDS AND GET REWARDS</h1>
          <p className={styles.descriptionCardEmail}>{`Refer your friends to us and earn hotel booking voucers. We'll give you 1 coin for  each friend that install our extension. Minimum cash-out 20 coins.`}</p>
          <div>
            <Form />
          </div>
          <p className={styles.infoCardEmail}>{`Limits on max rewards apply.`}</p>
        </div>
        <Steps />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}