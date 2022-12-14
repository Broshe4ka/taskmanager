import styles from './registration.module.scss'
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Registration = () => {

  const [data, setData] = useState({
    username: '',
    usersurname: '',
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(data)
  }

  return(
  <>
    <Head>
      <title>Sing up</title>
    </Head>
    <div className={styles.regform}>

      <form action="" className={styles.form}>
        <div className={styles.label}>Sign up</div>
        <input 
        type="text" 
        name="username" 
        id="username" 
        placeholder='Your name'
        />

        <input 
        type="text" 
        name="surname" 
        id="surname" 
        placeholder='Your surname'
        />

        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder='E-mail'
        />

        <input 
        type="password" 
        name="pass" 
        id="pass" 
        placeholder='Password'
        />
        <input 
        type="password" 
        name="accept_pass" 
        id="accept_pass" 
        placeholder='Password accept'
        />

        <div className={styles.quest}>
          Have an account - <Link href="/signin">sign in</Link>
        </div>
        <button type="submit">Sign up</button>
      </form>

    </div>

  </>
);
}
export default React.memo(Registration);
