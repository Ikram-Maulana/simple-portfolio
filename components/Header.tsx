import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <>
      <ProgressBar color="#388CF0" gradient={true} gradientColor="#1DB4D2" />
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
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                Project
              </Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="cursor-pointer block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-gray-400"
              >
                Experience
              </Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
