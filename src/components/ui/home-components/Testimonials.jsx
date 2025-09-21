import React from "react";

function Testimonials() {
  return (
    <section className=" dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 ">
        <h1 className="p-15 text-4xl font-semibold leading-none text-center">
          Testimonials
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm   shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50 ">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              ></svg>
              "I recently worked with him on a project and the experience was
              amazing. He not only delivered on time but also maintained great
              quality. Communication was smooth throughout the entire process.
              Highly recommend him for anyone looking for a professional
              developer."
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-violet-600"
              ></svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg  bg-gray-800 text-white">
            <img
              src={"./src/images/img1.jpg"}
              alt="img 1"
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Distinctio</p>
            <p className="text-sm uppercase">Harry</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              ></svg>
              "He is extremely talented and knows exactly what clients need. The
              website he created for my business looks modern and professional.
              Every detail was carefully handled with perfection. I am very
              satisfied and would love to work with him again.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-violet-600"
              ></svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg  bg-gray-800 text-white">
            <img
              src={"./src/images/img2.webp"}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Animi</p>
            <p className="text-sm uppercase"> illum</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              ></svg>
              "A very professional and hardworking person with great skills. He
              explained everything clearly and guided me step by step. The
              project was completed with precision and creativity. Definitely
              one of the best developers I’ve worked with."
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-8 h-8 dark:text-violet-600"
            ></svg>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg  bg-gray-800 text-white">
            <img
              src={"./src/images/img3.jpeg"}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Distinctio</p>
            <p className="text-sm uppercase">Edward</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              ></svg>
              "My experience with him has been outstanding from start to finish.
              The code quality, design, and overall functionality were
              top-notch. He went above and beyond to make sure I was happy. I
              will surely recommend him to my friends and colleagues."
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-violet-600"
              ></svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-800 text-white ">
            <img
              src={"./src/images/img4.jpg"}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Discuss</p>
            <p className="text-sm uppercase">John</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
