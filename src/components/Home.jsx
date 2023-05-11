import React from 'react'
import yannickImage from "../assets/Yannick.jpg";
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am an experienced software engineer with experience in React, Flask, Python, Javascript, Node.js just to name a few. I bring my experience in sales, my perspective as a first generation American, and my grit as a New Yorker to my work, finding creative solutions to complex problems.
I’m a learner at heart. From new tools to new cultures, I am constantly striving to build upon my existing frameworks.
I’m currently looking for new opportunities and roles.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="group-hover:rotate-90 duration-300">
              <RiArrowRightSLine size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
          <div>
            <img src={yannickImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
          </div>
      </div>
    </div>
  )
}

export default Home

