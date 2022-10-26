import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-scroll/modules";

const Header = () => {
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef<string>();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProgressBar
        color="#388CF0"
        gradient={true}
        gradientColor="#1DB4D2"
        height={5}
      />
      <header className={`${navRef.current} transition-all`}>
        <Navbar fluid={true} rounded={true}>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            className="cursor-pointer flex items-center"
          >
            <Image
              src="/icon-512x512.png"
              alt="Ikram Logo"
              width={42}
              height={42}
              className="h-6 sm:h-9"
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                <span className="num-list">01.</span> Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                <span className="num-list">02.</span> About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                <span className="num-list">03.</span> Project
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                <span className="num-list">04.</span> Experience
              </Link>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
