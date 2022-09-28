import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="h-20 py-5">
      <div className="max-w-5xl mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
              Ikram Maulana.
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link href="/">
              <a
                className={`cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white  ${
                  router.asPath == "/"
                    ? "dark:text-white"
                    : "dark:text-gray-400"
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="#about">
              <a
                className={`cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
                  router.asPath == "/#about"
                    ? "dark:text-white"
                    : "dark:text-gray-400"
                }`}
              >
                About
              </a>
            </Link>
            <Link href="#project">
              <a
                className={`cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
                  router.asPath == "/#project"
                    ? "dark:text-white"
                    : "dark:text-gray-400"
                }`}
              >
                Project
              </a>
            </Link>
            <Link href="#experience">
              <a
                className={`cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
                  router.asPath == "/#experience"
                    ? "dark:text-white"
                    : "dark:text-gray-400"
                }`}
              >
                Experience
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={`cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
                  router.asPath == "/blog"
                    ? "dark:text-white"
                    : "dark:text-gray-400"
                }`}
              >
                Blog
              </a>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
