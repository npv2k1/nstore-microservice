import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

// import { getFileUploadUrl } from 'src/services/rest/uploads/upload.query';
import { User } from 'src/services/graphql';

export interface DropdownProfileProps {
  align?: 'right';
  user: User;
}

function DropdownProfile({ align, user }: DropdownProfileProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (!trigger.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <img
          className="h-8 w-8 rounded-full"
          src={getFileUploadUrl(user.File?.name)}
          width="32"
          height="32"
          alt="User"
        /> */}
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-slate-800">
            {user.fullName}
          </span>
          <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`min-w-44 absolute top-full z-10 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        appear={undefined}
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="mb-1 border-b border-slate-200 px-3 pt-0.5 pb-2">
            <div className="font-medium text-slate-800">{user.fullName}</div>
            <div className="text-xs italic text-slate-500">
              {user?.userRole?.map((role) => (
                <p>{role.roleName}</p>
              ))}
            </div>
          </div>
          <ul>
            <li>
              <Link
                className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                href="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                href="/auth/login"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
