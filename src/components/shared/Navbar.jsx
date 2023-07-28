import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import React from 'react';

const Navbar = () => {
    const items = [
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
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
          <div className="bg-blue-600 text-white rounded p-2 text-sm font-medium">
            Build Your PC
          </div>
        </div>
      </header>
    );
};

export default Navbar;