import React from 'react'
import logo from '../public/images/logo.png';
import Image from 'next/image'

function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f3755] to-[#1a5b8a] shadow-lg">
            <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 transition-transform duration-300 hover:scale-110">
                    <Image src={logo} alt="Logo" fill className="object-contain" />
                </div>
                <h1 className="text-white font-bold text-xl tracking-tight">FinEdSoft</h1>
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-6 text-white">
                    {[
                        {text:"Home", href: "/"}, 
                        {text:"Blogs", href: "/blogs"},
                        {text:"Videos", href: "https://www.youtube.com/@FinEdSoft"},
                        {text:"Apps", href: "https://play.google.com/store/apps/developer?id=FinEdSoft"},
                        {text:"About", href: "/about"}
                    ].map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href} target={item.text === "Videos" || item.text == "Apps" ? "_blank" : ""}
                                className="font-medium transition duration-300 hover:text-sky-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-200 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}



export default Header