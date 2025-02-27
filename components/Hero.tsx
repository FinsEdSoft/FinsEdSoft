import React from 'react';

interface HeroProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle1, subtitle2}) => {
    return (

        <div className="
        flex flex-col justify-start h-screen text-white bg-[url('/images/hero-bg.png')] 
        bg-cover bg-center bg-no-repeat px-6 md:px-16 pt-20 md:pt-32
        relative overflow-hidden">
            <div className="max-w-4xl animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                    text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    {title}
                </h1>
                <p className="text-2xl md:text-3xl font-semibold mb-3 
                    animate-slideInRight">{subtitle1}</p>
                <p className="text-xl md:text-2xl animate-slideInLeft">
                    {subtitle2} <span className="font-bold text-blue-500">Fun.</span>
                </p>
                {/* <div className="mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white 
                        font-bold py-3 px-6 rounded-lg transition-all duration-300 
                        transform hover:scale-105 shadow-lg">
                        Get Started
                    </button>
                </div> */}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 
                bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    );
};

export default Hero;
