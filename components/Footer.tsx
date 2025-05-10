import React from 'react'

import github from '../public/github.svg'
import x from '../public/x.svg'
import youtube from '../public/youtube.svg'
import instagram from '../public/instagram.svg'

import Image from 'next/image'

function Footer() {
  return (
    <footer className="text-white py-6 bg-gradient-to-r from-[#0a2b45] to-[#154976] shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm md:text-base font-medium">&copy; 2025 FinsEdSoft. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6"></div>
            <a href="https://www.youtube.com/@FinsEdSoft" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <Image src={youtube} alt="YouTube" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://twitter.com/PurnenduMondal_" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <Image src={x} alt="Twitter" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://github.com/finsedsoft" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <Image src={github} alt="GitHub" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/finsedsoft" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <Image src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer