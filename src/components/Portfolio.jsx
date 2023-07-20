import React from 'react'
import dashBoard from '../assets/portfolio/dashBoard.jpg';
import betterProfessor from '../assets/portfolio/betterProfessor.jpg';




const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: dashBoard,
      code:'https://github.com/YaniWessi/AdminDashboard.git'
    },
    
    {
      id:2,
      src: betterProfessor,
      code:'https://github.com/bw-better-professor/frontend.git'
    }
    
   
  ]


  const handleCodeClick = (url) => {
    window.location.href = url;
  }

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full pb-96 text-white md:h-screen">
      <div className="max-w-screen-lg p-4 pt-44 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Coming soon!</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {
            portfolios.map(({id, src, code}) => {
              return (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleCodeClick(code)}>Code</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"></button>
                  </div>
                </div>
                )
            })
          }
            
          </div>
      </div>
    </div>
  )
}

export default Portfolio
