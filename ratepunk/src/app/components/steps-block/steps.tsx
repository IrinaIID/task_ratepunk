import { Caveat_Brush } from "next/font/google";
import InviteSvg from '@/assets/svg/invite';
import styles from './steps.module.scss';
import CollectSvg from "@/assets/svg/collect";
import VoucherSvg from "@/assets/svg/voucher";

const caveat = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400']
});

export default function Steps() {
  return (
    <div className={styles.allStepsBlock}>
      <div className={styles.stepBlock}>
        <InviteSvg />
        <div className={styles.descriptionStep}>
          <p className={styles.numStep}>STEP 1</p>
          <h2 className={`${caveat.className} ${styles.cardName}`}>INVITE FRIENDS</h2>
          <p className={styles.infoStep}>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={`${styles.stepBlock} ${styles.stepBlockWithMargin}`}>
        <div className={styles.descriptionStep2}>
          <p className={styles.numStep}>STEP 2</p>
          <h2 className={`${caveat.className} ${styles.cardName}`}>COLLECT COINS</h2>
          <p className={styles.infoStep}>Get 1 coin for each friend that install our extension using your referral link.</p>
        </div>
        <CollectSvg />
      </div>
      <div className={styles.stepBlock}>
        <VoucherSvg />
        <div className={styles.descriptionStep}>
          <p className={styles.numStep}>STEP 3</p>
          <h2 className={`${caveat.className} ${styles.cardName}`}>GET VOUCHER</h2>
          <p className={styles.infoStep}>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
        </div>
      </div>
    </div>
  );
}