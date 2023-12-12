import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import Interests from '../components/Interests/Interests';
import AboutMe from '../components/AboutMe/AboutMe';
import EmailContact from '../components/EmailContact/EmailContact';
import MyProjects from '../components/MyProjects/MyProjects';
import ContactMe from '../components/ContactMe/ContactMe';

const MainLayouts = () => {
    return (
        <div className='bg-[#050a20]'>
            <div className='max-w-6xl mx-auto '>
                {/* <div className="absolute top-0 w-full py-2"> */}
                <Navbar></Navbar>
            {/* </div> */}
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Interests></Interests>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <EmailContact></EmailContact>
            </div>
            <ContactMe></ContactMe>
        </div>
    );
};

export default MainLayouts;