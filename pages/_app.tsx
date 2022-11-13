import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
   <Layout>
      <Component {...pageProps} />
   </Layout>
);

export default React.memo(MyApp);
