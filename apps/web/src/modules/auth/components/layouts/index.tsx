import React from 'react';

export default function AuthPageLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex h-screen items-center justify-center bg-white sm:bg-gray-100">
      <div className="m-auto w-full max-w-[520px] rounded bg-white p-5 sm:p-8 sm:shadow">
        <div className="mb-2 flex justify-center">
          <h1 className="text-6xl font-bold text-gray-600">NSTORE</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export const getAuthLayout = (page: React.ReactElement) => <AuthPageLayout>{page}</AuthPageLayout>;
