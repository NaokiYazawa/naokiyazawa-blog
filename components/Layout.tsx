import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { FaYoutube, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8 text-center ">
        <div className="pt-9">
          <div className="flex justify-center mb-9">
            <a
              href="https://github.com/NaokiYazawa"
              className="mr-9 text-gray-800"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCiGdng-6ZLS5tlfw0xnG3TA"
              className="mr-9 text-gray-800"
            >
              <FaYoutube size={25} />
            </a>
            <a
              href="https://twitter.com/8SKeEdvtHfOcczY"
              className="mr-9 text-gray-800"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.instagram.com/naoki_tuat/"
              className="text-gray-800"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <p>© 2022 Copyright:</p>
          <p>Naoki Yazawa</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
