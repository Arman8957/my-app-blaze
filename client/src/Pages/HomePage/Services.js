import React from 'react'
import { GiArchiveResearch } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { TbSocial } from 'react-icons/tb'
import { FaChevronRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="lg:py-16 py-6 lg:my-20 my-5 mx-auto sm:max-w-xl md:max-w-full">
      <div className=" mb-10 md:mx-auto sm:text-center md:mb-12">
        <div className='text-center'>
          <p className="inline-block px-3 text-2xl text-red-600 animate-bounce py-px mb-1 font-bold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            OUR SERVICES
          </p>
        </div>
        <h2 className="mb-6 text-center font-sans lg:text-7xl text-5xl font-black leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          WE PROVIDE AWESOME SERVICES
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="duration-300 transform bg-white hover:-translate-y-2">
          <div className="h-full p-10 border border-l-0 rounded-md shadow-sm flex-col items-center">
            <GiArchiveResearch className='mx-auto text-9xl text-red-600 mb-4'></GiArchiveResearch>
            <p className="text-xl font-bold mb-2 text-center">STRATEGY & RESEARCH</p>
            <p className="text-sm text-gray-900 text-center">
              We include market research, trend analysis, and identifying growth opportunities to make informed decisions about product development, marketing, and other key business operations. It's essential for staying competitive in today's fast-paced market.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white hover:-translate-y-2">
          <div className="h-full p-10 border border-l-0 rounded-md shadow-sm flex-col items-center">
            <CgWebsite className='mx-auto text-9xl text-red-600 mb-4'></CgWebsite>
            <p className="text-xl font-bold mb-2 text-center">WEB DEVELOPMENT</p>
            <p className="text-sm text-gray-900 text-center">
              Using programming languages and working closely with designers, we create visually appealing and functional websites that meet each business's unique needs. Whether you need a simple brochure website or a complex e-commerce platform, we will build it to exceed your expectations
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white hover:-translate-y-2">
          <div className="h-full p-10 border border-l-0 rounded-md shadow-sm flex-col items-center">
            <TbSocial className='mx-auto text-9xl text-red-600 mb-4'></TbSocial>
            <p className="text-xl font-bold mb-2 text-center">SOCIAL MEDIA MARKETING</p>
            <p className="text-sm text-gray-900 text-center">
              We'll promote your business on social media with engaging content that builds your brand, engages customers, and drives traffic to your website. Our services help you connect with your audience in a personalized way, and build a strong online presence.
            </p>
          </div>
        </div>

      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-red-600 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
        >
          Learn more <FaChevronRight className='font-black text-base ml-1'></FaChevronRight>
        </a>
      </div>
    </div>
  )
}

export default Services