import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import Header from "./Header";

const Sidebar = dynamic(() => import("./Sidebar/Sidebar"), {
  ssr: true,
});

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-[#f1f5f9] ">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="flex flex-1 h-full min-h-0 overscroll-y-auto">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;

export const getAdminLayout = (page: React.ReactElement) => (
  <AdminLayout>{page}</AdminLayout>
);
