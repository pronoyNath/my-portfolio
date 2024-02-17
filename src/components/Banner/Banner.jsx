import React from 'react';
import Button from '../Button/Button';
import { FaFileDownload } from "react-icons/fa";
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

const Banner = () => {

    const [text] = useTypewriter({
        words: ['DEVELOPER'],
        loop: true,
    })

    // let words = ['Hello', '...']


    return (
        <div id='banner'>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex-col lg:gap-10 lg:flex-row-reverse justify-between">
                    <div>
                        <img src="https://i.ibb.co/Pjstypz/Whats-App-Image-2023-11-19-at-4-10-14-PM-1-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='text-white '>
                        <p className="text-xl uppercase ">Hello, I'm

                        </p>
                        <p className="pb-6 text-3xl uppercase text-[#dbb878]">Anthokhiya Nath</p>
                        <h1 className="text-5xl font-bold ">MERN STACK  <span className='text-[#dbb878] block md:inline-flex'>{text}<Cursor cursorStyle='_' /></span></h1>

                        <h1 className="text-xl font-normal mt-1">(Froendend Focused)</h1>
                        <a href="https://drive.google.com/file/d/1U6o3iwiiJ-cAFhuFiou93xCCTkMkk5si/view?usp=sharing" target='_'>
                            <button className=" py-2 rounded-lg mt-8 px-5 text-[#191919] border-none font-bold flex items-center gap-3 uppercase hover:bg-[#c49037] text-lg bg-[#dbb878] ">

                                Resume <FaFileDownload className='text-xl animate-bounce' />

                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;