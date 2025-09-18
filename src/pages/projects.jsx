import React from "react";

function Projects() {
  const projects = [
      {,
    {
      title: "My Portfolio",
      description:
        "Personal Portfolio with Profile Data, Resume or Self Improvement to Attract Clients and Employers in Flat Cartoon Hand Drawn Templates Illustration Pro Vector",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/208/590/large_2x/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg",
      link: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A blog application with categories, comments, and responsive design.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/18/06/35/blogging-5927251_1280.png",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-25">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">My Projects</h2>

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
  );
}

export default Projects;
