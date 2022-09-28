import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const blog: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ikram Blog</title>
      </Head>

      <section id="blog" className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-24">
          <div className="max-w-xl mx-auto px-5">
            <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-5xl">
              <h1
                className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
                style={{ lineHeight: "1.1" }}
              >
                This Feature is Under Construction⚒️
              </h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default blog;
