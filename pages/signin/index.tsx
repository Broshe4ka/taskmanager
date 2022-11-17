import styles from './login.module.scss'
import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [data, setData] = useState({
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
      <title>Sign in</title>
    </Head>

    <div className={styles.loginform}>

      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.label}>Sign in</div>
        <input 
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email}
          required
          type="email"
          placeholder="Enter email"
        />
        <input 
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
          required
          type="password"
          placeholder="Password"
        />
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
}

export default React.memo(Login);