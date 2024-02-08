import React from 'react'

import github from '../public/github.svg'
import x from '../public/x.svg'
import youtube from '../public/youtube.svg'
import instagram from '../public/instagram.svg'

import Image from 'next/image'

function Footer() {
  return (
    <footer className="text-white px-4 py-2 bg-[#0f3755] flex">
      <div className="flex-1">
        <p>&copy; 2024 FinEdSoft. All rights reserved.</p>
      </div>
        
      <div className="flex space-x-4">
        <a href="https://www.youtube.com/@FinEdSoft" target="_blank" rel="noreferrer">
          <Image src={youtube} alt="youtube" className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/PurnenduMondal_" target="_blank" rel="noreferrer">
          <Image src={x} alt="twitter" className="w-6 h-6" />
        </a>
        <a href="https://github.com/finedsoft" target="_blank" rel="noreferrer">
          <Image src={github} alt="github" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/finedsoft" target="_blank" rel="noreferrer">
          <Image src={instagram} alt="instagram" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer