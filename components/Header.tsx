import React from 'react'
import logo from '../public/images/logo.png';
import Image from 'next/image'

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-[#0f3755]">
            <div className="flex items-center">
                <Image src={logo} alt="Logo" className="w-8 h-8 mr-2 object-contain" />
                <h1 className="text-white font-bold text-lg">FinEdSoft</h1>
            </div>
            <nav>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <a href="/" className="hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-gray-300">Apps</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-gray-300">Videos</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-gray-300">Blogs</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-gray-300">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}



export default Header