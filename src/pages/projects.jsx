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
      title: "Remove User",
      description:
        "This feature allows you to remove users one by one from the list.By clicking the delete button, a specific user’s card is removed from the display dynamically without affecting other users.It helps in managing user data easily and keeping the interface clean.",
      image: "imgs/removeuser.PNG",
      link: "https://remove-user-and-again-fetch.vercel.app/",
    },
    {
      title: "Counter",
      description:
        "This is a simple Counter App project that allows users to increase, decrease, or reset a number with just one click. It features three buttons — Increment, Decrement, and Reset — to manage the counter value easily. The project demonstrates basic JavaScript functionality and dynamic DOM manipulation. It’s a great beginner project to understand event handling and UI updates in real time.",
      image: "imgs/counter.PNG",
      link: "https://counter-ochre-two.vercel.app/",
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
