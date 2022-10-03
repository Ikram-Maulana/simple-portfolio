import React from "react";
import { Footer } from "flowbite-react";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsDribbble,
  BsEnvelope,
} from "react-icons/bs";
import Link from "next/link";

const FooTer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="sm:h-20 py-5 sm:sticky top-0">
      <div className="max-w-5xl mx-auto px-6">
        <Footer container={true}>
          <Footer.Copyright
            by="Ikram Maulana, All Right Reserved."
            year={currentYear}
          />
          <div className="footer-icon">
            <Link href="https://instagram.com/ikram_maulana">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Instagram"
              >
                <Footer.Icon icon={BsInstagram} />
              </a>
            </Link>
            <Link href="https://github.com/ikram-maulana">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Github"
              >
                <Footer.Icon icon={BsGithub} />
              </a>
            </Link>
            <Link href="https://linkedin.com/ikram-maulana">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="LinkedIn"
              >
                <Footer.Icon icon={BsLinkedin} />
              </a>
            </Link>
            <Link href="https://dribbble.com/ikram_maulana">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Dribbble"
              >
                <Footer.Icon icon={BsDribbble} />
              </a>
            </Link>
            <Link href="mailto:ikram_maulana@onedrive.web.id">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="E-mail"
              >
                <Footer.Icon icon={BsEnvelope} />
              </a>
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default FooTer;
