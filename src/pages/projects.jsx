import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "An E-Commerce Website is a digital platform that allows customers to browse and purchase products online with ease. It offers a fast, secure, and user-friendly shopping experience just a click away.",
      image: "imgs/E-Commerce.jpg",
      link: "https://my-ecommerce-website-lemon.vercel.app/",
    },
    {
      title: "Academiya website",
      description:
        "This is my personal project where I built a modern online education platform that offers skill-based courses, certifications, and expert guidance. It includes features like course listings, tutor profiles, and flexible pricing plans. The goal of this project is to provide learners with an accessible and engaging environment to grow their technical and creative skills.",
      image: "imgs/academiya.PNG",
      link: "https://academiya-website.vercel.app/",
    },
    {
      title: "Guess Number Game",
      description:
        "Guess Number Game is a fun and interactive game where players try to guess the hidden number within a limited range. It helps improve focus, logical thinking, and keeps users entertained.",
      image: "imgs/Guess number.PNG",
      link: "https://guess-number-game-omega.vercel.app/",
    },
  ];

  return (
    <>
      <section className=" py-25">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            My Projects
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-black-700"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
