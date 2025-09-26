import React from "react";
import Footer from "../components/shared/Footer";

function Skills() {
  const skills = [
    "HTML, CSS, JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Web Design",
  ];

  return (
   <>
    <section className="py-25 px-6 sm:px-20  dark:text-gray-100 ">
      <div className="max-w-5xl mx-auto text-center mt-15">
        <h2 className="text-3xl font-bold mb-12 text-black">My Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-lg font-semibold">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
     
    </section>
   
   </>
    
  );
}

export default Skills;
