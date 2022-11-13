import styles from './login.module.scss'
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const Login = () =>(
  <>
    <Head>
      <title>Sign in</title>
    </Head>

    <div className={styles.loginform}>

      <form action="" className={styles.form}>
        <div className={styles.label}>Sign in</div>
        <input type="text" name="surname" id="surname" placeholder='Your surname'/>
        <input type="password" name="pass" id="pass" placeholder='Password'/>
        <div className={styles.quest}>
          Have no account - <Link href="/signup">sign up</Link>
        </div>
        <div className={styles.quest}>
        <Link href="">Forgot your password?</Link>
        </div>
        <button type="submit">Sign up</button>
      </form>

    </div>
  </>
);

export default React.memo(Login);