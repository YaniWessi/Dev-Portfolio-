import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 borgray500">About</p>
        </div>
          <p className="text-xl mt-20">
          I'm passionate about web development because it offers constant challenges, change, and the chance to make an impact. As the child of West African immigrants and the first college graduate in my family, problem-solving and adapting to change are ingrained in me.
          </p>

          <br />

          <p className="text-xl">
          Since finding web development I have immersed myself in programing languages such as Python, JavaScript and Node.js, and I am proficient in frameworks and libraries such as React, Redux, Flask, and Flask-Admin.
With a former career in sales, I transitioned to engineering through the BloomTech Instuite program. I’ve worked freelance with local businesses and contracted with Propel, a social impact startup based in Brooklyn serving 5+ million customers. I’m currently looking for my next opportunity.
          </p>
      </div>  
    </div>
  )
}

export default About
 