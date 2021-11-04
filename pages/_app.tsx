import React from 'react';
/* import { ThemeProvider } from 'next-themes'; */
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="grid h-screen grid-cols-12 gap-6 px-5 py-8 xl:px-40 lg:px-6 md:px-32 sm:px-20">
      <div className="col-span-12 p-4 text-center bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-dark">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-dark">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
