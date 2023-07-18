import '../styles/global.css';
// import "antd/dist/antd.css";
// import "antd/dist/reset.css";

import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// import "@nstack/ui/styles.css";

import { NextPage } from 'next';

import AuthProvider from 'src/contexts/AuthContext';
import { SettingProvider } from 'src/contexts/SettingContext';
import ApiProvider from 'src/services';

import AppProvider from '@contexts/AppContext';
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

  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(true);
  // }, []);

  // if (!showChild) {
  //   return null;
  // }

  // if (typeof window === "undefined") {
  //   return <></>;
  // }

  return (
    <ApiProvider>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </ApiProvider>
  );
}

export default MyApp;
// export default appWithTranslation(MyApp);
