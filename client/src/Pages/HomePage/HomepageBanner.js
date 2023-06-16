import React from 'react'
import madcartz from "../../Assets/madcartz.png";
import creatus from "../../Assets/creatus.png";
import header_image from "../../Assets/header_image.png";
import { FaChevronRight } from 'react-icons/fa'
import '../HomePage/HomePage.css'

const HomepageBanner = () => {
  const images = [
    "https://supervisorsolutions.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f69ac50f.png&w=384&q=75",
    "http://t3.gstatic.com/images?q=tbn:ANd9GcT74VziUoREkiC0vNNbf7JdWXtxy4-Pixs2-XawCFbbjnCxzVRp",
    madcartz,
    creatus

  ]
  return (
    <div className="">
      <section className="flex lg:flex-row flex-col-reverse justify-between items-center mt-9">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-gray-400">Welcome to Blaze Digital</h1>
          <p className="font-extrabold text-5xl">IGNITE YOUR</p>
          <p className="font-black lg:text-8xl text-6xl text-red-600 mb-0">
            ONLINE PRESENCE
          </p>
          <p className="text-gray-500 font-medium text-md w-4/5 text-center lg:text-left mx-auto lg:mx-0">
            We are a Software Company with 2 years of experience in both
            Software and Marketing
          </p>
          <button className="bg-red-600 text-white px-5 py-3 rounded-md text-xl font-bold mt-6 flex items-center hover:bg-red-700  mx-auto lg:mx-0">
            Learn More <FaChevronRight className='font-black text-base ml-1'></FaChevronRight>
          </button>
        </div>
        <div className="lg:w-1/2 w-3/4 p-5 animate-rotate">
          <img src={header_image} alt=""></img>
        </div>
      </section>
      <section className="p-3 my-10">
        <div className="flex justify-between items-center">
          <hr class="w-1/3 h-0.5 mx-auto my-4 bg-gray-100 rounded md:my-10 dark:bg-gray-200" />
          <h3 className="text-center text-red-600 lg:text-4xl text-xl font-bold lg:w-1/3 w-2/3">
            Our Gold Clients
          </h3>
          <hr class="w-1/3 h-0.5 mx-auto my-4 bg-gray-100 rounded md:my-10 dark:bg-gray-200" />
        </div>
        {/* Animated Carousel */}
        <div className="flex items-center justify-center opacity-70 mt-5">
          {/* 1. */}
          <div className="lg:w-[200%] w-[400%] h-20 overflow-hidden relative">
            {/* 2. */}
            <div className="lg:w-[200%] w-[400%] h-20 flex items-center justify-around absolute left-0 animate gap-20 animate">
              {/* 3 */}
              {images.map((i) => {
                return (
                  <div className="flex justify-center items-start lg:w-[11rem] w-[40rem]">
                    <img src={i} alt='' />
                  </div>
                );
              })}
              {images.map((i) => {
                return (
                  <div className="flex justify-center items-start lg:w-[11rem]  w-[40rem]">
                    <img src={i} alt='' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default HomepageBanner