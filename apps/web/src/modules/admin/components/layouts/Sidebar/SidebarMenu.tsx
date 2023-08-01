import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiSun, BiSupport } from 'react-icons/bi';
import { BsChatLeftText } from 'react-icons/bs';
import { GrChat } from 'react-icons/gr';
import { HiHome, HiOutlineLogin, HiOutlineNewspaper } from 'react-icons/hi';
import { IoArrowUpCircle, IoEarthSharp, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSensors } from 'react-icons/md';
import { CommunityIcon } from './SidebarIcon';
import SidebarLinkGroup from './SidebarLinkGroup';
import { AiOutlineStock } from 'react-icons/ai';
import { FaBitcoin } from 'react-icons/fa';
import { TiWeatherNight } from 'react-icons/ti';
import { useQuery } from '@tanstack/react-query';
import { isUpgraded } from '../../modules/uprade-account/services/checkout-service';

export interface SidebarMenuProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: () => void;
}

type Menu =
  | {
      path: string;
      Icon: React.ReactNode;
      text: string;
      isGroup: true;
      subItems: Menu[];
    }
  | {
      text: string;
      path: string;
      Icon?: React.ReactNode;
      isGroup?: false;
    };

const MENUS: Menu[] = [
  {
    path: '/admin',
    Icon: <HiHome />,
    text: 'Admin',
  },
  {
    path: '/admin/user',
    Icon: <HiOutlineNewspaper />,
    text: 'User',
  },
  {
    path: '/admin/category',
    Icon: <HiOutlineNewspaper />,
    text: 'Category',
  },

  {
    path: '/admin/product',
    Icon: <HiOutlineNewspaper />,
    text: 'Product',
  },
];

const MakeMenu = (menus: Menu[]) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [data, setData] = useState(false);
  // TODO: fix this
  // const {data} = useQuery({
  //   queryKey: [],
  //   queryFn: ()=> isUpgraded(),
  // })

  return (
    <ul className="mt-3">
      {menus.map((menu) => {
        if (menu.isGroup) {
          return (
            <SidebarLinkGroup key={menu.text} activecondition={pathname.includes(menu.path)}>
              {(handleClick: () => void, open: any) => {
                return (
                  <>
                    <a
                      href={menu.path}
                      className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                        pathname.includes(menu.path) && 'hover:text-slate-200'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                        // sidebarExpanded
                        //   ? handleClick()
                        //   : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {/* iconccc */}
                          {menu.Icon}
                          <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                            {menu.text}
                          </span>
                        </div>
                        {/* Icon */}
                        <div className="ml-2 flex shrink-0">
                          <svg
                            className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                              open && 'rotate-180'
                            }`}
                            viewBox="0 0 12 12"
                          >
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    <div className="lg:sidebar-expanded:block lg:hidden 2xl:block ">
                      <ul className={`mt-1 pl-9 ${!open && 'hidden'} text-slate-200`}>
                        {MakeMenu(menu.subItems)}
                      </ul>
                    </div>
                  </>
                );
              }}
            </SidebarLinkGroup>
          );
        } else {
          return (
            <>
              <div
                key={menu.text}
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname.includes(menu.path) && 'bg-slate-900'
                }`}
              >
                <Link
                  href={menu.path}
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname.includes('messages') && 'hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex grow items-center">
                      {menu?.Icon}
                      <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                        {menu.text}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        }
      })}
    </ul>
  );
};

const SidebarMenu = ({ sidebarExpanded, setSidebarExpanded }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="space-y-8">
      {/* Pages group */}
      <div>
        <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
          <span className="hidden w-6   text-center lg:block" aria-hidden="true">
            •••
          </span>
          <span className="lg:sidebar-expanded:block lg:hidden 2xl:block">Pages</span>
        </h3>

        {MakeMenu(MENUS)}
      </div>
      {/* More group */}
      <div>
        <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
          <span className="hidden w-6   text-center lg:block" aria-hidden="true">
            •••
          </span>
          <span className="lg:sidebar-expanded:block lg:hidden 2xl:block">More</span>
        </h3>
        <ul className="mt-3"></ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
