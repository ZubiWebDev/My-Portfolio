import React from "react";


function About() {
  return (
    
    <div className="bg-gray-100 p-25 ">
       <h2 className="text-3xl font-bold text-center mb-12 ">Work experience</h2>
      {/* Heading */}
    

      {/* Timeline Section */}
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3 h-60 mt-20">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>
            <div className="-mt-2 ">
              <h3 className="text-lg font-bold text-gray-900 ">
                MERN Developer
              </h3>
              <p className="mt-0.5 text-sm text-gray-700">
                Build scalable RESTful APIs and handle server-side logic.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Manage integrations between frontend and backend efficiently.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Collaborated with cross-functional teams, including product
                managers, designers, and backend developers, to define and
                implement new features.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Worked closely with UI/UX designers and product managers to
                refine software designs, ensuring technical feasibility and
                optimal user experience across multiple platforms.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3 h-60">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>
            <div className="-mt-2">
              <h3 className="text-lg font-bold text-gray-900">
                Full stack Developer & Trainer
              </h3>
              <p className="mt-0.5 text-sm text-gray-700">
                Provide hands-on training, mentorship, and support to junior
                developers or trainees, guiding them in understanding MERN stack
                concepts and practical implementation.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Collaborate with team members and trainees to solve technical
                challenges, promote knowledge sharing, and create an environment
                of continuous learning and innovation.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Develop and deliver comprehensive training modules, workshops,
                and coding exercises tailored to different skill levels, from
                beginner to advanced, focusing on real-world applications.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3 h-60">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>
            <div className="-mt-2">
              
              <h3 className="text-lg font-bold text-gray-900">
                MERN Developer
              </h3>
              <p className="mt-0.5 text-sm text-gray-700">
                Implemented scalable, high-speed, responsive components for the
                company's main webpage using the MERN stack, resulting in a 30%
                increase in user engagement.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Manage integrations between frontend and backend efficiently.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </p>
              <br />
              <p className="mt-0.5 text-sm text-gray-700">
                Participating in code reviews and providing constructive
                feedback to other developers.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>
      </ol>
    </div>
  
  );
  
}

export default About;



