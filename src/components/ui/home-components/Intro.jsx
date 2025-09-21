import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center p-6 sm:p-20 dark:text-gray-800 dark:bg-gray-100 ">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 mt-40 ">
          Introduction
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center">
          <img
            src={"./src/images/my pic.jpg"}
            alt=""
            className="w-36 h-40 border rounded-full dark:bg-gray-100 dark:border-gray-700"
          />

          <div className="flex flex-col">
            <h4 className="text-1/3 font-bold">Hi, I'm MUHAMMAD ZUBAIR</h4>
            <p className="dark:text-gray-600 max-w-md text-justify">
              A passionate Frontend Developer skilled in HTML, CSS, JavaScript,
              React, and Tailwind CSS. I enjoy creating responsive and
              user-friendly websites with clean designs. My focus is on solving
              problems through modern web solutions. I aim to keep learning and
              building impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
