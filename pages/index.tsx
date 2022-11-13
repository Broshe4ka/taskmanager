import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss'

const Home = () =>(
  <>
      <Head><title>TaskManager - Welcome!</title></Head>

        <div  className={styles.main}>
          asdasd
        </div>

  </>
);

export default React.memo(Home);