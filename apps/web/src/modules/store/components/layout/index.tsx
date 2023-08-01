import Head from 'next/head';
import React from 'react';
import Header from './Header';

const StoreLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>NStore</title>
      </Head>

      <Header />
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        {/* <Banner /> */}
        {/* ProductFeed */}
        {children}
      </main>
    </div>
  );
};

export const getStoreLayout = (page: React.ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default StoreLayout;
