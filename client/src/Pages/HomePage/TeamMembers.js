import React from 'react';
import { FaFacebookF, FaGithub, FaArtstation, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import sahil from '../../Assets/sahil.png'
import arman from '../../Assets/arman.png'


const TeamMembers = () => {
  return (
    <div className='flex-col items-center align-middle justify-center'>
      <div className='flex-col align-middle items-center justify-center text-center'>
        <p className='inline-block px-3 text-2xl text-red-600  font-bold tracking-wider  uppercase rounded-full bg-teal-accent-400'>THE BEST</p>
        <h2 className='mb-6 font-sans lg:text-7xl text-5xl font-black leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto'>INDUSTRY EXPERTS</h2>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="rounded-xl z-10 lg:p-4 p-0">
          <figure>
            <img className='rounded-xl min-w-full lg:min-w-0' src={arman} alt="Shoes" />
          </figure>
          <div className='relative mx-auto bottom-16 z-0 shadow-sm w-5/6'>
            <div className="flex align-middle bg-white items-center mt-7 px-5 py-4 top-9 justify-between rounded-sm">
              <div className=''>
                <h2 className="card-title font-bold text-2xl">MD Arman</h2>
                <p className='font-light whitespace-nowrap text-slate-400'>Cloud Engineer</p>
              </div>
              <div className="flex space-x-2">
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href='https://www.facebook.com/lonm.arman.1' target="_blank" rel='noreferrer'><FaFacebookF /></a>

                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://github.com/Arman8957" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://www.linkedin.com/in/md-arman-01201a199/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl z-10 lg:p-4 p-0">
          <figure>
            <img className='rounded-xl min-w-full lg:min-w-0' src="https://avatars.githubusercontent.com/u/70315479?v=4" alt="Shoes" />
          </figure>
          <div className='relative mx-auto bottom-16 z-0 shadow-sm w-5/6'>
            <div className="flex align-middle bg-white items-center mt-7 px-5 py-4 top-9 justify-between rounded-sm">
              <div className=''>
                <h2 className="card-title font-bold text-2xl">Safa Asgar</h2>
                <p className='font-light whitespace-nowrap text-slate-400'>Senior Designer</p>
              </div>
              <div className="flex space-x-2">
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://www.behance.net/safaasgarx/" target="_blank" rel="noreferrer"><FaBehance /></a>

                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://www.artstation.com/mohammadsafa" target="_blank" rel="noreferrer"><FaArtstation /></a>
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://www.linkedin.com/in/safa-asgar/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl z-10 lg:p-4 p-0">
          <figure>
            <img className='rounded-xl min-w-full lg:min-w-0' src={sahil} alt="Shoes" />
          </figure>
          <div className='relative mx-auto bottom-16 z-0 shadow-sm w-5/6'>
            <div className="flex align-middle bg-white items-center mt-7 px-5 py-4 top-9 justify-between rounded-sm">
              <div className=''>
                <h2 className="card-title font-bold text-2xl">Asif Sahil</h2>
                <p className='font-light whitespace-nowrap text-slate-400'>Blockchain Expert</p>
              </div>
              <div className="flex space-x-2">
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href='https://www.facebook.com/sksahil.asif' target="_blank" rel='noreferrer'><FaFacebookF /></a>

                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://github.com/AsifAhmedSahil" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a className='w-9 h-9 flex align-middle items-center bg-red-500 text-white text-lg border rounded-full p-2 border-none' href="https://www.linkedin.com/in/asif-ahmed-sahil-8365861a0/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;