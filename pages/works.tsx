import React from 'react';
import Layout from '../components/Layout';

export const Works = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang',
      }}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-10 w-full lg:w-1/3 lg:p-4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Next.js
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Hulu clone App
                </h1>
                <p className="leading-relaxed mb-5">
                  I created a Hulu clone app using Nextjs and tailwindCSS
                </p>
                <a
                  href="https://hulu-2-l128on28d-naokiyazawa.vercel.app/"
                  className=" inline-flex items-center"
                >
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      View
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div className="p-10 w-full lg:w-1/3 lg:p-4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  Blockchain
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Chat App
                </h1>
                <p className="leading-relaxed mb-5">
                  I created Decentralized App using Nextjs and Moralis.
                </p>
                <a
                  href="https://metaverse-2vkqe7xgq-naokiyazawa.vercel.app/"
                  className=" inline-flex items-center"
                >
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      View
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Works;
