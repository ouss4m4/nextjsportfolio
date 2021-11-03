import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 xl:px-48 lg:px-6 md:px-32 sm:px-20">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
