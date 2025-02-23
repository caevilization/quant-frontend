import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-tf-dark-gray border-b border-tf-light-gray">
      <div className="h-16 px-4 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold text-tf-white">TradingFlow</span>
        </div>

        {/* Center section */}
        <div className="flex items-center">
          <span className="text-tf-gray-white">My Strategy</span>
          <span className="mx-2 text-tf-gray-white">/</span>
          <span className="text-tf-white font-medium">My Magic Flow</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full">
            {/* Avatar placeholder */}
          </div>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center">
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#profile"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#settings"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#logout"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
