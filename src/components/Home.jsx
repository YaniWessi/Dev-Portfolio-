import React from 'react'
import yannickImage from "../assets/Yannick.jpg";
import { RiArrowRightSLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I enjoy exploring new perspectives and approaches to thinking, creativity and  problem-solving, even for seemingly trivial or complex issues, as they can often lead to significant benefits for the larger context.

As a software engineer, I'm constantly learning about new tools and techniques to enhance the frameworks that we have today. I'm passionate about using these tools to solve problems and create value for the end-user.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="group-hover:rotate-90 duration-300">
              <RiArrowRightSLine size={25} className="ml-1"/>
              </span>
            </button>
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

