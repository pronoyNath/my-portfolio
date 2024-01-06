import { MdMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin, IoPaperPlaneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ContactMe = () => {
    return (
        <div id="contact" className="bg-[#1c264f] text-gray-50 ">
            <footer className="max-w-6xl mx-auto py-10">
                <div className="container flex flex-col p-4 mx-auto md:p-8 items-center lg:flex-row justify-around dark:divide-gray-400" >
                <div>
                <h3 className="text-5xl lg:text-6xl text-[#dbb878] font-bold">Contact Me</h3>
                <p className="text-xl text-white lg:text-2xl ml-2 font-semibold flex gap-2 lg:gap-5">Feel free to reach out!
                <IoPaperPlaneSharp  className="text-5xl lg:text-6xl"/></p>
                </div>
                <div className="text-2xl lg:text-4xl space-y-5 mt-10 lg:mt-0 text-white">
                    <h3 className="text-white flex items-center gap-3 hover:underline  hover:text-[#dbb878]"><MdMail className="text-[#dbb878]"/> pronoynath890@gmail.com</h3>
                    <h3 className="text-white flex items-center gap-3 hover:underline hover:text-[#dbb878]"><MdOutlinePhoneInTalk className="text-[#dbb878]"/> +880 1568-193969</h3>
                    <div className="flex gap-5 text-5xl">
                    <Link to={'https://www.linkedin.com/in/anthokhiyanath'} target="_blank">
                    <h3 className="flex items-center gap-3 hover:underline hover:text-[#dbb878]"><IoLogoLinkedin className="text-[#dbb878] hover:text-[#8f6f35]"/></h3>
                    </Link>
                    <Link to={'https://github.com/pronoyNath'} target="_blank">
                    <h3 className="flex items-center gap-3 hover:underline "><IoLogoGithub className="text-[#dbb878] hover:text-[#8f6f35]"/></h3>
                    </Link>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactMe;