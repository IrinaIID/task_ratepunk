import styles from './header.module.scss';
import LogoSvg from '../../../assets/svg/logo';
import Link from 'next/link';


export default function Header() {
  return (
    <div className={styles.allHeader}>
      <div className={styles.container}>
        <a href='https://www.ratepunk.com/'>
          <LogoSvg />
        </a>
      <div className={styles.navigationBlock}>
        <Link href={'/'} className={styles.linkNav}>Chrome Extention</Link>
        <Link href={'price'} className={styles.linkNav}>Price Comparison</Link>
        <Link href={'blog'} className={styles.linkNav}>Blog</Link>
      </div>
      </div>

    </div>
  );
}