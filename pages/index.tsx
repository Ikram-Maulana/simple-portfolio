import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import Experiences from "../components/Experiences";
import HorizontalBreak from "../components/HorizontalBreak";
import Layout, { siteTitle } from "../components/Layout";
import Particle from "../components/Particle";
import Projects from "../components/Projects";
import { getAllExperiences, getAllProjects, getProfile } from "../utils";

interface dataFetchProps {
  profile: {
    data: {
      profile: {
        id: string;
        name: string;
        imageUrl: string;
        description: string;
        interest: string[];
        weapon: string[];
        socialMedia: string[];
      }[];
    };
  };
  experiences: {
    data: {
      experiences: {
        id: string;
        period: string;
        position: string;
        description: string;
        createdAt: string;
        updatedAt: string;
      }[];
    };
  };
  projects: {
    data: {
      projects: {
        id: string;
        name: string;
        imageLink: string;
        description: string;
        githubLink: string;
        demoLink: string;
        createdAt: string;
        updatedAt: string;
      }[];
    };
  };
}

const Home: NextPage<dataFetchProps> = ({ profile, experiences, projects }) => {
  const profile_data = profile.data.profile[0];
  const experiences_data = experiences.data.experiences;
  const projects_data = projects.data.projects;

  const socialMediaParser = (socialMedia: string) => {
    const socialMediaData = JSON.parse(socialMedia);
    return socialMediaData;
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero */}
      <section id="hero" className="bg-white dark:bg-gray-900 overflow-hidden">
        <Particle />
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 min-h-screen flex items-center">
          <div className="max-w-xl mx-auto px-5">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <span
                  className="text-sm font-mono font-black uppercase text-center text-gray-500 dark:text-[#64D7FF]"
                  style={{ letterSpacing: "0.35em" }}
                >
                  HI, MY NAME IS
                </span>
              </div>
            </div>
            <div className="text-gray-800 dark:text-[#CCD6F6] text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-[#CCD6F6]"
                style={{ lineHeight: "1.1" }}
              >
                {profile_data.name}.
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-[#8892B0]">
              {profile_data.description} 👨‍💻.
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row mt-6">
              <Link href={socialMediaParser(profile_data.socialMedia[0]).url}>
                <a
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-4 text-center mr-2 mb-2 dark:border-[#64D7FF] dark:text-[#64D7FF] dark:hover:text-white dark:hover:bg-[#64D7FF]/10"
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
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 pb-16 lg:pb-[154px] flex flex-no-wrap md:items-start md:space-x-8 items-start flex-col-reverse md:flex-row-reverse md:space-x-reverse">
          <div className="w-full md:flex-1 flex flex-col md:pl-1/10">
            <h2
              className="mt-0 mb-4 text-gray-900 dark:text-[#CCD6F6] text-2xl sm:text-3xl font-extrabold"
              style={{ lineHeight: "1.125" }}
            >
              Hello, {"I'm "}
              <span className="text-purple-500 dark:text-[#0EA5E9]">
                {profile_data.name}
              </span>
              .
            </h2>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-[#CCD6F6]"
              style={{ lineHeight: "1.6" }}
            >
              🏫 Muhammadiyah University of Sukabumi
            </p>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-[#CCD6F6]"
              style={{ lineHeight: "1.6" }}
            >
              🔎 Main interests in{" "}
              <span className="text-[#0EA5E9]">
                {profile_data.interest.join(", ").replace(/,(?=[^,]*$)/, " &")}
              </span>
            </p>
            <p
              className="text-lg sm:text-xl mb-3 text-gray-700 dark:text-[#CCD6F6]"
              style={{ lineHeight: "1.6" }}
            >
              My preferred weapons of choice 👇
            </p>
            <div className="mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
              {profile_data.weapon.map((item, index) => (
                <div
                  className="flex justify-start items-center py-2 leading-tight lg:w-2/5 text-lg"
                  key={index}
                >
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
                  <span className="dark:text-[#CCD6F6] text-sky-500">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center flex-col sm:flex-row mt-4">
              <Link href={socialMediaParser(profile_data.socialMedia[1]).url}>
                <a
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#64D7FF] dark:text-[#64D7FF] dark:hover:text-white dark:hover:bg-[#64D7FF]/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Github
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0">
            <Image
              loader={({ src }) => src}
              src={profile_data.imageUrl}
              alt={profile_data.name}
              width={1440}
              height={1370}
              className="rb-lazy rounded-lg shadow-2xl object-cover"
              unoptimized={true}
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
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-16 xl:py-[154px]">
          <div className="max-w-xl mx-auto px-5">
            <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-[#CCD6F6]"
                style={{ lineHeight: "1.1" }}
              >
                My Coding Projects⚒️
              </h1>
            </div>
          </div>

          {/* Looping Projects */}
          <div className="pt-12 xl:pt-20 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects_data.map((project) => (
              <div
                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5"
                key={project.id}
              >
                <Projects {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalBreak />

      {/* Experience */}
      <section
        id="experience"
        className="bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 pt-16 lg:pt-[154px] pb-5 lg:pb-16">
          <div className="max-w-xl mx-auto px-5">
            <div className="text-gray-800 dark:text-[#CCD6F6] text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-[#CCD6F6]"
                style={{ lineHeight: "1.1" }}
              >
                My Experience🧑‍💻
              </h1>
            </div>

            {/* Looping Experience */}
            {experiences_data.map((data) => (
              <div className="pt-12 xl:pt-20" key={data.id}>
                <Experiences {...data} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop smooth />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const profile = await getProfile();
  const experiences = await getAllExperiences();
  const projects = await getAllProjects();

  return {
    props: {
      profile,
      experiences,
      projects,
    },
  };
};

export default Home;
