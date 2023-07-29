import RootLayout from '@/components/layout/RootLayout';
import { categories } from '@/data/category';
import { LaptopOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

const BuildPCPage = () => {
    return (
      <div className='p-8'>
        <h2 className="text-4xl px-2 font-bold text-center my-8">Build Your Own PC</h2>
        {categories.map((category) => (
          <div className='flex justify-between items-center px-4 py-2 rounded-lg shadow-md' key={category}>
            <div className='flex items-center'>
                <LaptopOutlined className='text-6xl text-blue-800' />
                <h2 className="text-xl px-2  font-bold text-center my-8">
                {category} (Required)
                </h2>

            </div>
            <button className='border-blue-800 border-2 rounded text-blue-800 p-3'><Link href={`/build-pc/choose/${category}`}>Choose</Link></button>
          </div>
        ))}
      </div>
    );
};

export default BuildPCPage;

BuildPCPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};