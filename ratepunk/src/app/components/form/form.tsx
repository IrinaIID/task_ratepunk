'use client';
import SuccessSvg from '@/assets/svg/success';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './form.module.scss';

export default function Form() {

  const LINK_REFERRAL = `https://ratepunk.com/referral`;

  const [valueInput, setValueInput] = useState<string | null>(null);
  const [error, setError] = useState<boolean | null>(false);
  const [isLink, setIsLink] = useState<boolean>(false);

  function onChangeText(e: ChangeEvent<HTMLInputElement>) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/iu;
    setValueInput(e.currentTarget.value)
    let isEmail = false;
    if (valueInput) {
      isEmail = EMAIL_REGEXP.test(valueInput)
    }
    setError(!isEmail)
  }
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();


    event.preventDefault()
    if (!error && valueInput) {
      setIsLink(true)

      await fetch("https://api.jsonbin.io/v3/b/65de20c11f5677401f353cc6", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$mTdOJc9tremenuzOJJHATOhUiA3yesCF/pxTFta0VyvjpgWoewJb.",
          "X-Access-Key": "$2a$10$MhdH3eLyE1VMos.2sGnbE.L1ZSSjtQaYs6jQtqt6beGI3jy3JpIr."
        },
        body: JSON.stringify({ email: valueInput }),
      });
    }
  }

function onSubmitLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      {!isLink && <div>
        {error && 
          <div className={styles.messageErrorEmail}>Error State</div> 
        }
        <form 
          className={styles.allForm}
          onSubmit={onSubmit}
        >
          <input 
            type='email'
            name='email'
            className={styles.inputForm}
            placeholder='Enter your email address'
            onChange={e => onChangeText(e)} 
          />
          <button  type='submit'className={styles.buttonForm}>
            Get Referral Link
          </button>
        </form>
      </div>}
      {isLink &&
        <div className={styles.blockLink}>
          <div className={styles.descriptionLinkBlock}>
            <SuccessSvg />
            <p className={styles.descriptionLinkText}>Your email is confirmed!</p>
          </div>
          <form 
            className={styles.allFormLink}
            onSubmit={e => onSubmitLink(e)}
          >
            <input 
              type='text'
              className={styles.inputFormLink}
              value={LINK_REFERRAL}
            />
            <button  
              type='submit'className={styles.buttonFormLink}
              onClick={() =>  navigator.clipboard.writeText(`${LINK_REFERRAL}`)}
            >
              Copy
            </button>
          </form>
        </div>
      }
    </>
  );
}