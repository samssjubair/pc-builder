import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const items = [
      {
        key: "1",
        label: <Link href="/category/cpu">CPU / Processor</Link>,
      },
      {
        key: "2",
        label: <Link href="/category/ram">RAM</Link>,
      },
      {
        key: "3",
        label: <Link href="/category/storage">Storage</Link>,
      },
      {
        key: "4",
        label: <Link href="/category/monitor">Monitor</Link>,
      },
      {
        key: "5",
        label: <Link href="/category/keyboard">Keyboard</Link>,
      },
      {
        key: "6",
        label: <Link href="/category/mouse">Mouse</Link>,
      },
    ];
    return (
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">PC builder PRO</div>

          <nav>
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <div className="relative inline-block text-left">
              {/* Dropdown content */}
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button ghost className="flex items-center">
                  Categories <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </nav>

          {/* PC builder function */}
          <button className="bg-blue-600 text-white rounded p-2 text-sm font-medium">
            Build Your PC
          </button>
        </div>
      </header>
    );
};

export default Navbar;