'use client';
import { useState } from 'react';
import styles from './form.module.scss';

export default function Form() {

  const [valueInput, setValueInput] = useState<string | null>(null)
  // const [error, setError] = useState<string | null>(null)
 
  // async function onSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
  //   event.preventDefault()
  //   setError(null) // Clear previous errors when a new request starts
  //   const formData = new FormData(event.currentTarget)
  //   console.log(formData)
  // }

  return (
    <div>
      {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
      <form className={styles.allForm}>
        <input 
          type='email'
          className={styles.inputForm}
          placeholder='Enter your email address'
          onChange={e => { setValueInput(e.currentTarget.value) }} 
        />
        <button 
          type='submit'
          className={styles.buttonForm}
        >
          Get Referral Link
        </button>
      </form>
    </div>
  );
}