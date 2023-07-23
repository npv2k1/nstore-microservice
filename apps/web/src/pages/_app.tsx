import '../styles/global.css';
// import "antd/dist/antd.css";
// import "antd/dist/reset.css";

import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import 'react-toastify/dist/ReactToastify.css';


import { NextPage } from 'next';
import ApiProvider from 'src/services';


import { ToastContainer } from 'react-toastify';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const authProps = Component.authenticate || false;

  return (
    <ApiProvider>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </ApiProvider>
  );
}

export default MyApp;
