import styles from './login.module.scss'
import Head from 'next/head';
import React from 'react';

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
          Have no account - <a href="">sign up</a>
        </div>
        <div className={styles.quest}>
        <a href="">Forgot your password?</a>
        </div>
        <button type="submit">Sign up</button>
      </form>

    </div>
  </>
);

export default React.memo(Login);