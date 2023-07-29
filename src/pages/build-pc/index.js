import RootLayout from '@/components/layout/RootLayout';
import { categories } from '@/data/category';
import { LaptopOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const BuildPCPage = () => {
  const { selectedComponents } = useSelector((state) => state.builder);

  // console.log(selectedComponents['CPU'].productName && selectedComponents['Mouse'].productName);
  
    return (
      <div className="p-8">
        <h2 className="text-4xl px-2 font-bold text-center my-8">
          Build Your Own PC
        </h2>
        {categories.map((category) => (
          <div className="rounded-lg shadow-md my-8" key={category}>
            <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
              <div className="flex items-center">
                <h2 className="text-xl px-2  font-bold text-center my-4">
                  {category}{" "}
                  <span className="text-sm rounded-lg bg-gray-300 p-2 py-1">
                    Required
                  </span>
                </h2>
              </div>
              <button className="border-blue-800 border-2 rounded text-blue-800 p-3">
                <Link href={`/build-pc/choose/${category}`}>Choose</Link>
              </button>
            </div>
            <div>
              {selectedComponents[category] && (
                <div className="flex justify-between items-center px-4 py-2 ">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <Image
                        src={selectedComponents[category].imageUrl}
                        width={100}
                        height={100}
                        alt={selectedComponents[category].productName}
                      />
                      <h2 className="text-xl px-2  font-bold text-center my-8">
                        {selectedComponents[category].productName}
                      </h2>
                    </div>
                    <h2 className="text-xl px-2 font-bold text-center  text-red-800 my-8">
                      ${selectedComponents[category].price}
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {selectedComponents["CPU"] !== null &&
          selectedComponents["Monitor"] !== null &&
          selectedComponents["RAM"] !== null &&
          selectedComponents["Storage"] !== null &&
          selectedComponents["Keyboard"] !== null &&
          selectedComponents["Mouse"] !== null && (
            <button onClick={()=>alert("Congratulations, You've successfully build a PC")} className="border-blue-800 border-2 text-center block mx-auto hover:bg-blue-800 hover:text-white  rounded text-blue-800 p-3 px-6 font-bold">
              Complete Build
            </button>
          )}
      </div>
    );
};

export default BuildPCPage;

BuildPCPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};