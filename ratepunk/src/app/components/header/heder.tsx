'use client';
import CloseSvg from '@/assets/svg/close';
import MenuSvg from '@/assets/svg/menu';
import Link from 'next/link';
import { useState } from 'react';
import LogoSvg from '../../../assets/svg/logo';
import styles from './header.module.scss';


export default function Header() {

  const [menuPopup, setMenuPopup] = useState(false);

  return (
    <>
      <div className={menuPopup ? `${styles.allHeader} ${styles.noAllHeader}` : `${styles.allHeader}`}>
        <div className={styles.container}>
          <a href='https://www.ratepunk.com/'>
            <LogoSvg />
          </a>
          <div className={styles.navigationBlock}>
            <Link href={'/'} className={styles.linkNav}>Chrome Extension</Link>
            <Link href={'price'} className={styles.linkNav}>Price Comparison</Link>
            <Link href={'blog'} className={styles.linkNav}>Blog</Link>
          </div>
          <button 
            className={styles.menuButton}
            onClick={() => {setMenuPopup(true)}}
          >
            <MenuSvg />
          </button>
        </div>
      </div>
      <div className={menuPopup ? `${styles.allHeaderMobile}` : `${styles.allHeaderMobile} ${styles.noAllHeaderMobile}`}>
        <div className={styles.hederContainerMobile}>
          <div className={styles.menuHeaderMobile}>
            <LogoSvg />
            <button 
              className={styles.closeButton}
              onClick={() => {return setMenuPopup(false)}}
            >
              <CloseSvg />
            </button>
          </div>
          <div className={styles.navigationBlockMobile}>
            <Link href={'/'} className={styles.linkNavMobile}>Chrome Extension</Link>
            <Link href={'price'} className={styles.linkNavMobile}>Price Comparison</Link>
            <Link href={'blog'} className={styles.linkNavMobile}>Blog</Link>
          </div>
        </div>
      </div>
    </>
  );
}