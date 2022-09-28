import { Button } from "flowbite-react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HorizontalBreak from "../components/HorizontalBreak";
import Layout, { siteTitle } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero */}
      <section id="hero" className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-24">
          <div className="max-w-xl mx-auto px-5">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <span
                  className="text-sm font-black uppercase text-center text-gray-500 dark:text-gray-400"
                  style={{ letterSpacing: "0.35em" }}
                >
                  HI, MY NAME IS
                </span>
              </div>
            </div>
            <div
              className="text-gray-800 dark:text-gray-100 from-blue-500 to-teal-400 text-3xl sm:text-5xl"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
                style={{ lineHeight: "1.1" }}
              >
                Ikram Maulana.
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300">
              I am Full Stack Web Developer, Data Enthusiast and UI Designer. I
              am very interested in the world of IT and the creative industry, I
              am very happy to learn new things to add insight and feel
              challenged to learn it 👨‍💻.
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row mt-6">
              <Link href={"https://www.linkedin.com/in/ikram-maulana/"}>
                <a
                  className="py-3 mx-2 my-2 rounded-full font-bold translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-sky-500 text-white text-center leading-4 hover:bg-sky-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Do You Want To Work With Me?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-20 flex flex-no-wrap md:items-start md:space-x-8 items-start flex-col-reverse md:flex-row-reverse md:space-x-reverse">
          <div className="w-full md:flex-1 flex flex-col md:pl-1/10">
            <h2
              className="mt-0 mb-4 text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl font-extrabold"
              style={{ lineHeight: "1.125" }}
            >
              Hello, {"I'm "}
              <span className="text-purple-500 dark:text-purple-300">
                Ikram Maulana
              </span>
              .
            </h2>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300"
              style={{ lineHeight: "1.6" }}
            >
              🏫 Muhammadiyah University of Sukabumi
            </p>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300"
              style={{ lineHeight: "1.6" }}
            >
              🔎 Main interests in Full Stack Web, UI designer &amp; Data
              Analyst
            </p>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-gray-300"
              style={{ lineHeight: "1.6" }}
            >
              My preferred weapons of choice 👇
            </p>
            <div className="mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
              <div className="flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg">
                <div
                  className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
                  style={{ minWidth: "1.25rem" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="dark:text-gray-100 text-sky-500">
                  NextJS / React
                </span>
              </div>
              <div className="flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg">
                <div
                  className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
                  style={{ minWidth: "1.25rem" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="dark:text-gray-100 text-sky-500">Python</span>
              </div>
              <div className="flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg">
                <div
                  className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
                  style={{ minWidth: "1.25rem" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="dark:text-gray-100 text-sky-500">
                  JavaScript (NodeJS)
                </span>
              </div>
              <div className="flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg">
                <div
                  className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
                  style={{ minWidth: "1.25rem" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="dark:text-gray-100 text-sky-500">Figma</span>
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row mt-4">
              <Link href="https://github.com/Ikram-Maulana">
                <a target="_blank" rel="noopener noreferrer">
                  <Button outline={true} pill={true}>
                    My Github
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0">
            <Image
              src="/ikram.jpg"
              alt="Ikram Maulana"
              width={1440}
              height={1370}
              className="rb-lazy rounded-lg shadow-2xl object-cover"
            />
            <noscript />
          </div>
        </div>
      </section>

      <HorizontalBreak />

      {/* My Project */}
      <section
        id="project"
        className="bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20">
          <div className="max-w-xl mx-auto px-5">
            <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
                style={{ lineHeight: "1.1" }}
              >
                My Coding Projects⚒️
              </h1>
            </div>
          </div>
        </div>
      </section>

      <HorizontalBreak />

      {/* Experience */}
      <section
        id="experience"
        className="bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20">
          <div className="max-w-xl mx-auto px-5">
            <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
                style={{ lineHeight: "1.1" }}
              >
                My Experience🧑‍💻
              </h1>
            </div>

            {/* Looping Experience */}
            <div className="py-12 xl:py-20">
              <div className="mb-4">
                <div
                  style={{ outline: "none" }}
                  className="flex justify-center items-center"
                >
                  <span
                    className="text-sm font-black uppercase text-center text-blue-400 dark:text-blue-300"
                    style={{ letterSpacing: "0.35em" }}
                  >
                    Aug 2021 - Jan 2022
                  </span>
                </div>
              </div>
              <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl">
                <h1
                  className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
                  style={{ lineHeight: "1.1" }}
                >
                  Front-End and Back-End Web Developer
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300">
                I took part in an independent study program organized by
                Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi at
                Dicoding Space
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
