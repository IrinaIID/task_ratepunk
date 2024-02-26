import AppleSvg from '@/assets/svg/apple';
import ChromeSvg from '@/assets/svg/chrome';
import AllStars from '../rate-stars/rate-stars';
import styles from './pre-footer.module.scss';

export default function PreFooter() {
  return (
    <div className={styles.allPreFooter}>
      <div className={styles.container}>
        <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklk'>
          <div className={styles.cardAppBlock}>
            <ChromeSvg />
            <div className={styles.describeCardBlock}>
              <p className={styles.describeCard}>available in the</p>
              <p className={styles.describecardSpan}>chrome web store</p>
            </div>
          </div>
        </a>
        <a href='https://apps.apple.com/app/ratepunk/id1607823726]'>
          <div className={styles.cardAppBlock}>
            <AppleSvg />
            <div className={styles.describeCardBlock}>
              <p className={styles.describeCard}>available in the</p>
              <p className={styles.describecardSpan}>apple app store</p>
            </div>
          </div>
        </a>
        <div className={styles.rateBlock}>
          <AllStars />
          <p className={styles.rateText}>Chrome Store reviews</p>
        </div>
      </div>
    </div>
  );
}