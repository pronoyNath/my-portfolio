import React from 'react';
import Button from '../Button/Button';
import { FaFileDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div id='banner'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Pjstypz/Whats-App-Image-2023-11-19-at-4-10-14-PM-1-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-white'>
                        <p className="text-xl uppercase ">Hello, I'm</p>
                        <p className="pb-6 text-3xl uppercase text-[#dbb878]">Anthokhiya Nath</p>
                        <h1 className="text-5xl font-bold">MERN STACK <span className='text-[#dbb878]'>DEVELOPER</span></h1>
                        <h1 className="text-xl font-normal mt-1">(Froendend Focused)</h1>
                        <a href="https://drive.google.com/file/d/1cqM_pSKZXZUVqb3Vp1sJs3_d7oRT1iq8/view?usp=drive_link" target='_'>
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