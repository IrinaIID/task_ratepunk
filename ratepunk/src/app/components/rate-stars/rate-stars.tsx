import StarSvg from '@/assets/svg/star';
import styles from './rate-stars.module.scss';

export default function AllStars() {
  return (
    <div className={styles.allStarsBlock}>
      <button className={styles.starButton}><StarSvg /></button>
      <button className={styles.starButton}><StarSvg /></button>
      <button className={styles.starButton}><StarSvg /></button>
      <button className={styles.starButton}><StarSvg /></button>
      <button className={styles.starButton}><StarSvg /></button>
    </div>
  );
}