import { Checkbox, CheckboxOptionType } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

export type DynamicColumnProps = {
  align?: 'left' | 'right';
  options?: (string | number | CheckboxOptionType | any)[];
  // onChange?: (checkedValue: CheckboxValueType[]) => void;
  value?: CheckboxValueType[];
  onSubmit?: (checkedValue: CheckboxValueType[]) => void;
};

function DynamicColumn({ align, options, onSubmit, value }: DynamicColumnProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectColumns, setSelectColumns] = useState<CheckboxValueType[]>([]);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const onChange = (checkedValue: any) => {
    setSelectColumns(checkedValue);
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
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
        className="btn border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Columns</span>
        <wbr />
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        className={`min-w-56 absolute top-full z-10 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white pt-1.5 shadow-lg ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter="transition ease-out duration-200 transform"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        appear={undefined}
      >
        <div ref={dropdown}>
          {/* Head */}
          <div className="px-4 pt-1.5 pb-2 text-xs font-semibold uppercase text-slate-400">
            Columns
          </div>
          {/* Body */}
          <Checkbox.Group
            className="flex w-full flex-col px-3 text-sm font-medium"
            // options={options}
            // defaultValue={value}
            value={value}
            onChange={onChange}
          >
            {options &&
              options.map((item) => (
                <Checkbox key={item.label} value={item.value}>
                  {item.label}
                </Checkbox>
              ))}
          </Checkbox.Group>

          {/* Footer */}
          <div className="border-t border-slate-200 bg-slate-50 py-2 px-3">
            <div className="flex items-center justify-between space-x-3">
              <div>
                <button className="btn-xs border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-600">
                  Clear
                </button>
              </div>
              <div>
                <button
                  className="btn-xs bg-indigo-500 text-white hover:bg-indigo-600"
                  onClick={() => {
                    if (onSubmit) onSubmit(selectColumns);
                    setDropdownOpen(false);
                  }}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DynamicColumn;
