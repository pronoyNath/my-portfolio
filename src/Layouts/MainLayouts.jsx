import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import Interests from '../components/Interests/Interests';
import AboutMe from '../components/AboutMe/AboutMe';
import EmailContact from '../components/EmailContact/EmailContact';
import MyProjects from '../components/MyProjects/MyProjects';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';
import ParticleContainer from '../components/ParticleContainer/ParticleContainer';

const MainLayouts = () => {
    return (
        <div className='bg-[#050a20] overflow-x-hidden'>
            <div className='max-w-6xl mx-auto '>
                {/* <div className="absolute top-0 w-full py-2"> */}
                <ParticleContainer/>
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
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;