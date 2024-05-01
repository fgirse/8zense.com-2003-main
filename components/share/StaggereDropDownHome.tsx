

import Link from "next/link";


import React from 'react';
//import './index.css';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: (
      <Link className="relative z-10 hover:text-red-900 text-[1.03rem] " target="" rel="" href="#section-features">
        Feature
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-itworks">
        How it works
      </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-projRef">
        profRef
      </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="#section-Testimonials">
        Testimonials
      </Link>
    ),
    key: '4',
  },
];

const App: React.FC = () => (
  <Dropdown className="ml-5 hover:border rounded-xl px-2 py-1  hover:bg-slate-500 text-4xl text-zenseWhite font-sans font-black uppercase lg:text-2xl xl:text-3xl"  menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Home
        <DownOutlined className="bg-slate-900 text-white text-lg uppercase" />
      </Space>
    </a>
  </Dropdown>
);

export default App;

