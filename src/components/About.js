import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center mx-auto max-w-screen-lg w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 text-gray-500 inline">
            About
          </p>
        </div>
        <p className="text-xl">
          I am a frontend developer with a degree in Industrial Chemistry and
          two years of experience in web development. I have worked on a variety
          of projects for clients in the retail industry. I am passionate about
          creating great user experiences and have a strong understanding of
          usability and accessibility standards... With a keen attention to
          details and customers satisfaction is my goal, and I am advocate for
          continuous learning to keep abreast with the trending technologies in
          order to keep industry growth and requirements.
        </p>
      </div>
    </div>
  );
};

export default About;
