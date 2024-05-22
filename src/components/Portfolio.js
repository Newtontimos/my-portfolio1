import React from "react";
import workImg from "../assets/portfolio/workImg.jpeg";
import project2 from "../assets/portfolio/project-2.jpeg";
import project3 from "../assets/portfolio/project-3.jpeg";
import project4 from "../assets/portfolio/project-4.jpeg";
import project5 from "../assets/portfolio/project-5.jpeg";
import project10 from "../assets/portfolio/project10.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: workImg,
      link: "https://finance-website-dun.vercel.app/",
      code: "https://github.com/Newtontimos/finance-website",
      tool: "React, Tailwind Css",
    },
    {
      id: 2,
      src: project2,
      link: "https://timo-app.vercel.app/",
      code: "https://github.com/Newtontimos/timo-app",
      tool: "React, Tailwind Css",
    },
    {
      id: 3,
      src: project3,
      link: "https://my-second-react-project-alpha.vercel.app/",
      code: "https://github.com/Newtontimos/my-second-react-project",
      tool: "React,Tailwind Css ",
    },
    {
      id: 4,
      src: project4,
      link: "https://react-app1-eosin.vercel.app/",
      code: "https://github.com/Newtontimos/react-app1",
      tool: "React, Tailwind Css, API",
    },
    {
      id: 5,
      src: project5,
      link: "https://accordion-app-zeta.vercel.app/",
      code: "https://github.com/Newtontimos/accordion-app",
      tool: "React,Css",
    },
    {
      id: 6,
      src: project10,
      link: "https://netflix-five-ebon.vercel.app/",
      code: "https://github.com/Newtontimos/clone-netflix",
      tool: "React,Tailwind Css,firebase,context",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 w-full h-full flex flex-col justify-center py-16">
        <div>
          <p className="text-4xl font-bold border-b-4 inline text-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code, tool }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="name"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 md:px-6 py-3 md:m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>

                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 md:px-6 py-3 md:m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>

              <p className="flex ml-4 text-orange-300">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
