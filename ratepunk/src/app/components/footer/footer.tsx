import styles from './footer.module.scss';
import LogoSvg from '../../../assets/svg/logo';
import Link from 'next/link';
import EmailFooterSvg from '@/assets/svg/email-footer';
import InstagramSvg from '@/assets/svg/instagram';
import FacebookSvg from '@/assets/svg/fb';
import LinkedinSvg from '@/assets/svg/in';
import TwitterSvg from '@/assets/svg/twitter';
import TiktokSvg from '@/assets/svg/tiktok';


export default function Footer() {
  return (
    <div className={styles.allFooter}>
      <div className={styles.container}>
        <div className={styles.blockDescription}>
          <a href='https://www.ratepunk.com/'>
            <LogoSvg />
          </a>
          <p className={styles.descriptionText}>
            {`Ratepunk compares hotel room prices across rhe najor online travel agencies. When you search for a room, Ratepunk extention scan the top booking sites and runs a price comparison, so you can be confident in knowing you're getting the best deal!`}
          </p>
          <p className={styles.descriptionInfo}>
            {`© 2021 Ratepunk. All Rights Reserved.`}
          </p>
        </div>
        <div className={styles.blockLinks}>
          <h3 className={styles.footerNameBlock}>QUICK LINKS</h3>
          <div className={styles.navigationLinks}>
            <Link href={'price'} className={styles.linkNav}>Price Comparison</Link>
            <Link href={'/'} className={styles.linkNav}>Chrome Extention</Link>
            <Link href={'/'} className={styles.linkNav}>How It Works</Link>
            <Link href={'blog'} className={styles.linkNav}>Ratepunk Blog</Link>
            <Link href={'/'} className={styles.linkNav}>Privacy Policy</Link>
          </div>
        </div>
        <div className={styles.blockContacts}>
          <h3 className={styles.footerNameBlock}>CONTACTS</h3>
          <div className={styles.blockContactEmail}>
            <EmailFooterSvg />
            <p className={styles.contactEmail}>hi@ratepunk.com</p>
          </div>
          <h3 className={styles.footerNameBlock}>SOCIAL</h3>
          <div className={styles.blockSocialIcons}>
            <div className={styles.iconBlock}>
              <a href="https://www.instagram.com/ratepunk/"><InstagramSvg /></a>
            </div>
            <div className={styles.iconBlock}>
              <a href="https://www.facebook.com/r8punk/"><FacebookSvg /></a>
            </div>
            <div className={styles.iconBlock}>
              <a href="https://www.linkedin.com/company/ratepunk/"><LinkedinSvg /></a>
            </div>
            <div className={styles.iconBlock}>
              <a href="https://twitter.com/rate_punk"><TwitterSvg /></a>
            </div>
            <div className={styles.iconBlock}>
              <a href="https://www.tiktok.com/@ryanthetravelguy?lang=en"><TiktokSvg /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}