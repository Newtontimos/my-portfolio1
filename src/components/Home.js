import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/picture-3.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg flex flex-col justify-center items-center h-full px-4 mx-auto md:flex-row ">
        <div className="flex flex-col justify-center h-full py-16">
          <h1 className="text-4xl sm:text-7xl font-bold text-white py-20">
            I am a Frontend developer
          </h1>
          <p className="text-gray-500 max-w-md py-4">
            I am a Front End Engineer with two years of experience working with
            JavaScript, HTML, CSS, ReactJS, Git, Redux, Tailwind CSS to deliver
            exceptional users experiences. Adept at contributing to a highly
            collaborative work environment, finding solutions and determining
            customer satisfaction, with attention to details and fast learning
            ability.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white flex px-6 py-3 my-2 w-fit items-center rounded-md
                bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:mt-40 ">
          <img
            src={heroImage}
            alt="heroImage"
            className="rounded-full w-2/3 mx-auto md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
