import React from "react";

function Overview() {
  const cards = [
    {
      title: "Projects",
      description:
        "Successfully completed multiple projects with clean UI and responsive design.",
      icon: "📂",
    },
    {
      title: "Clients",
      description:
        "Worked with satisfied clients globally, delivering quality work on time.",
      icon: "👨‍💼",
    },
    {
      title: "Experience",
      description:
        "Hands-on experience in React, Tailwind CSS, and modern web technologies.",
      icon: "💻",
    },
    {
      title: "Support",
      description:
        "Providing continuous support and updates to keep projects running smoothly.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 bg-gray-100  ">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center  text-black mb-12 ">
          Overview
        </h2>
        
      

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:scale-105 transform transition duration-300"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
