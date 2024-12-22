import React from 'react';
import { ChevronDownIcon } from '../icons/ChevronDownIcon';
import { BarChartIcon } from '../icons/BarChartIcon';
import { LayoutIcon } from '../icons/LayoutIcon';
import { PlusIcon } from '../icons/PlusIcon';
import { RefreshIcon } from '../icons/RefreshIcon';
import { UsersIcon } from '../icons/UsersIcon';
import { TrashIcon } from '../icons/TrashIcon';
import { DatabaseIcon } from '../icons/DatabaseIcon';
import { SlidersIcon } from '../icons/SlidersIcon';
import { ColumnsIcon } from '../icons/ColumnsIcon';
import { FaShare, FaCaretDown } from 'react-icons/fa';

export default function HeaderNav() {
  const buttons = [
    { icon: <BarChartIcon />, text: 'Show chart', className: '' },
    { icon: <LayoutIcon />, text: 'Focused view', className: '' },
    { icon: <PlusIcon />, text: 'New', className: '' },
    { icon: <RefreshIcon />, text: 'Refresh', className: 'sm:hidden' },
    { icon: <UsersIcon />, text: 'Collaborate', className: 'text-blue-600 hover:bg-blue-50' },
    { icon: <TrashIcon />, text: 'Delete', className: 'text-gray-500' },
    { icon: <DatabaseIcon />, text: 'Smart data', className: 'hidden md:flex' },
    { icon: <SlidersIcon />, text: 'Edit filters', className: 'hidden md:flex' },
    { icon: <ColumnsIcon />, text: 'Edit columns', className: 'hidden md:flex' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 px-2 py-2 border-b border-gray-200 bg-gray-100 mb-5 text-sm md:text-xs rounded-md shadow-lg">
      {/* My open leads dropdown */}
      <button className="flex items-center gap-1 h-8 px-2 font-livvic hover:bg-gray-200 rounded text-black w-full sm:w-auto mb-2 sm:mb-0 text-md md:text-[12px]">
        My open leads
        <ChevronDownIcon className="ml-auto" />
      </button>

      <div className="hidden sm:block h-4 w-px bg-gray-200 mx-2" />

      {/* Main action buttons */}
      <div className="flex flex-wrap items-center gap-1 w-full sm:w-auto">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`flex items-center gap-1.5 h-8 px-2 hover:bg-gray-200 rounded text-black ${button.className}`}
          >
            {button.icon}
            <span className={`${index < 6 ? 'hidden sm:inline' : ''} whitespace-nowrap`}>
              {button.text}
            </span>
          </button>
        ))}
      </div>

      {/* This will push the remaining items to the right on larger screens */}
      <div className="hidden sm:block flex-grow" />

      {/* Share button - always visible */}
      <div className="flex items-center gap-0.5 ml-auto sm:ml-0">
        <div className="inline-flex items-center bg-blue-700 rounded-md overflow-hidden">
          <button className="flex items-center justify-center p-2 hover:bg-blue-800 text-white">
            <FaShare />
          </button>
          <div className="w-px h-6 bg-blue-600"></div>
          <button className="flex items-center justify-center p-2 hover:bg-blue-800 text-white">
            <FaCaretDown />
          </button>
        </div>
      </div>
    </div>
  );
}

