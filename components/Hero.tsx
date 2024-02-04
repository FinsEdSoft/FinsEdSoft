import React from 'react';

interface HeroProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle1, subtitle2}) => {
    return (
        <div className="
        flex flex-col pl-16 pt-32 justify-start h-screen  text-white bg-[url('/images/hero-bg.png')] bg-cover">
            <h1 className="text-3xl"><strong>{title}</strong></h1>
            <p className="text-3xl"><strong>{subtitle1}</strong></p>
            <p className="text-l">{subtitle2} <strong>Fun.</strong></p>
        </div>
       
    );
};

export default Hero;
