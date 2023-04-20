import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 borgray500">About</p>
        </div>
          <p className="text-xl mt-20">

          I'm passionate about web development because it offers constant challenges, change, and the chance to make an impact. As the child of West African immigrants and the first college graduate in my family, problem-solving, adapting to change are ingrained in me.

          </p>

          <br />

          <p className="text-xl">
          Since finding web development I have immersed myself in programing languages such as Python, JavaScript and Node.js, and I am proficient in frameworks and libraries such as React, Redux, Flask, and Flask-Admin.

At Propel, I improved internal CMS tools and created a new geolocation tool for an app that reached 5.5 million low income Americans. I collaborated with remote cross-functional teams and documented and addressed bugs.
          </p>
      </div>  
    </div>
  )
}

export default About
