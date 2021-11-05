import React from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Oussama Baaziz | Software Developer</title>
        <meta
          property="og:title"
          content="Oussama Baaziz | Software Developer"
          key="title"
        />
      </Head>
      <Head>
        <meta
          property="og:description"
          content="I am a Software Developer with enterprise exeprince. I Develop and maintain softwares for the digital transformation of companies. Following enterprise standards and architectures that help us scale faster while respecting business rules."
          key="description"
        />
      </Head>
      <div
        className="items-center hidden w-screen overflow-hidden md:flex bg-dark-500"
        style={{ height: '86vh' }}
      >
        <div className="relative w-screen " style={{ height: '66%' }}>
          <Image
            src="/images/portfolio-lander.jpg"
            layout="fill"
            alt="avatar"
            quality="100"
          />
          <div className="absolute top-0 left-0 z-20 flex items-center justify-start w-full h-full hero-overlay">
            <div className="flex flex-col lg:pl-20 xl:pl-32 2xl:pl-50">
              <h1 className="pb-8 text-white text-7xl font-lines">
                Hi, I&apos;m{' '}
                <span className="font-kaushan text-green">Oussama</span>
              </h1>
              <h3 className="text-5xl text-white font-lines">
                Software Developer
              </h3>
            </div>
          </div>
          <div className="absolute top-0 left-0 z-10 w-full h-full second-overlay"></div>
        </div>
      </div>
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
    </>
  );
}

export default MyApp;
