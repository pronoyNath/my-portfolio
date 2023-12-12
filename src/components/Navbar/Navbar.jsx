import { FaArrowAltCircleRight } from 'react-icons/fa';

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="navbar bg-[#050a20] text-white pt-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52  bg-[#dbb878]">

                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('banner')}>Home</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('about')}>About Me</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('skills')}>Skills</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('projects')}>Projects</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('contact')}>Contact Me</a>
                        </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-sm md:text-xl uppercase text-[#dbb878]">Anthokhya Nath</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('banner')}>Home</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('about')}>About Me</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('skills')}>Skills</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('projects')}>Projects</a>
                        </li>
                        <li className='hover:border-b border-[#dbb878]'>
                            <a onClick={() => scrollToSection('contact')}>Contact Me</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative flex-shrink-0 mr-5 hidden md:block" >
                        <span className="absolute bottom-0 right-0 w-3 h-3 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                        <img src="https://i.ibb.co/ChmwFRM/kj.png" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                    </div>
                    <a onClick={() => scrollToSection('hireMe')}>
                        <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-lg bg-[#dbb878]">hire me <FaArrowAltCircleRight className='animate-pulse' />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;