import Lottie from 'lottie-react';
import aboutAnimation from '../../assets/animations/aboutMe.json'

const AboutMe = () => {
    return (
        <div id='about'>
    
            <div className="hero min-h-screen text-white">
                <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
                <div className='flex-1 w-96 '>
                <Lottie animationData={aboutAnimation} className='-ml-10'></Lottie>
                </div>
                    <div className='flex-1 px-5 lg:px-0'>
                        <h1 className="text-5xl font-bold uppercase text-[#dbb878]">About Me</h1>
                        <p className="py-6">Hello, I'm a MERN Stack Developer.Now,I'm focusing on front-end devlopment.I have been working with MERN technologies for the last 6 months with having knowledge about React.js,Node.js,Monogdb,ES6,Tailwindcss etc. I want to explore more about this technologies...</p>
                        <div className='space-y-2'>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>Name: </span>Anthokhiya Nath</h2>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>NATIONALITY: </span>Bangladeshi</h2>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>ADDRESS: </span>Rangpur, bangladesh</h2>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>PHONE: </span>+880 1568-193969</h2>
                        <h2 className='font-bold text-lg '><span className='uppercase text-[#dbb878]'>E-MAIL: </span>pronoynath890@gmail.com</h2>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>Languages: </span>English,Bangla,Hindi,Urdu</h2>
                        <h2 className='font-bold text-lg uppercase'><span className='uppercase text-[#dbb878]'>Education: </span>computer science & engineering <br /> (3rd year)</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;