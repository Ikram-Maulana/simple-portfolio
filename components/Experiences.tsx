import React from "react";

interface ExperiencesProps {
  period: string;
  position: string;
  description: string;
}

const Experiences = ({ period, position, description }: ExperiencesProps) => {
  return (
    <>
      <div className="mb-4">
        <div
          style={{ outline: "none" }}
          className="flex justify-center items-center"
        >
          <span
            className="text-sm font-black uppercase text-center text-blue-400 dark:text-blue-300"
            style={{ letterSpacing: "0.35em" }}
          >
            {period}
          </span>
        </div>
      </div>
      <div className="text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl">
        <h1
          className="text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100"
          style={{ lineHeight: "1.1" }}
        >
          {position}
        </h1>
      </div>
      <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </>
  );
};

export default Experiences;
