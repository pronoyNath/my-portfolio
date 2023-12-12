import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../MyProjects/style.css';

// import required modules
import { Navigation } from 'swiper/modules';

const MyProjects = () => {
    return (
        <div id="projects" className=" pt-20">
            <h2 className="text-3xl font-bold uppercase text-center text-[#dbb878] pb-20">Some of My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-0">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#1c264f] bg-clip-border  text-white shadow-lg mx-auto">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 h-56 bg-clip-border shadow-blue-gray-500/40">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src="https://i.ibb.co/1rnDBHH/1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/JcD051X/2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/HBZK3Ry/3.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/KwJqMnG/4.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>
                        <button
                            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path
                                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 text-center">
                        <div className="flex items-center justify-between mb-3 ">
                            <h5 className="mx-auto font-sans text-xl text-center border-b pb-2 font-medium text-blue-gray-900">
                                Project-Name: Blood Donation
                            </h5>

                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white">
                            This project is about donating blood.This apllication has 3 type of user role: admin, donor, volunteer. Each user based on their role has different work.
                        </p>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white mt-5 space-y-5 ">
                            <span className="text-lg font-semibold border-b pb-2">Technologies:</span> <br />
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">React.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Node.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Payment System</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Material UI</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Firebase authentication</button>

                        </p>

                    </div>
                    <div className="p-6 pt-0 space-y-5">

                        <div className="flex gap-5">
                            <Link to={"https://github.com/pronoyNath/blood-donate-client"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Client Side Code</button>
                            </Link>
                            <Link to={"https://github.com/pronoyNath/blood-donation-server"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Server Side Code</button>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={"https://blood-donate-347ce.web.app"} target="_blank">
                                <button className=" items-center gap-2 py-4 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878] w-full inline-flex justify-center">Live Demo</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#1c264f] bg-clip-border  text-white shadow-lg mx-auto">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 h-56 bg-clip-border shadow-blue-gray-500/40">
                         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src="https://i.ibb.co/jvxyf1m/g1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/wd1jYpK/g2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/zSF7VZ8/g3.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/sstmpCQ/g4.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>
                        <button
                            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path
                                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 text-center">
                        <div className="flex items-center justify-between mb-3 ">
                            <h5 className="mx-auto font-sans text-xl text-center border-b pb-2 font-medium text-blue-gray-900">
                                Project-Name: Grand Hotel
                            </h5>

                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white">
                            User can book a room, cheack all the rooms, the user also can cancel booking | update booking date | also can checkout details of rooms.

                        </p>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white mt-5 space-y-5 ">
                            <span className="text-lg font-semibold border-b pb-2">Technologies:</span> <br />
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">React.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Node.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Mongodb</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">JWT</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Firebase authentication</button>

                        </p>

                    </div>
                    <div className="p-6 pt-0 space-y-5">

                        <div className="flex gap-5">
                            <Link to={"https://github.com/pronoyNath/grand-hotel-client"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Client Side Code</button>
                            </Link>
                            <Link to={"https://github.com/pronoyNath/grand-hotel-server"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Server Side Code</button>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={"https://grand-hotel-daa65.web.app/"} target="_blank">
                                <button className=" items-center gap-2 py-4 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878] w-full inline-flex justify-center">Live Demo</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#1c264f] bg-clip-border  text-white shadow-lg mx-auto">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 h-56 bg-clip-border shadow-blue-gray-500/40">
                        {/* <ProjectSlider></ProjectSlider> */}
                     
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src="https://i.ibb.co/YbqrgZz/t1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/CWZxtMp/t2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/v4wkgP6/t3.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>
                        <button
                            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path
                                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 text-center">
                        <div className="flex items-center justify-between mb-3 ">
                            <h5 className="mx-auto font-sans text-xl text-center border-b pb-2 font-medium text-blue-gray-900">
                                Project-Name: Taste Master
                            </h5>

                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white">
                            User can choose all brand products. User also  can buy | can add product at cart , also can delete product from cart. Also have Theme change option.
                        </p>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white mt-5 space-y-5 ">
                            <span className="text-lg font-semibold border-b pb-2">Technologies:</span> <br />
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">React.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Express.js</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Tailwind CSS</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Daisy UI</button>
                            <button className="btn btn-outline text-[#dbb878] px-2 py-1 mx-1">Firebase authentication</button>

                        </p>

                    </div>
                    <div className="p-6 pt-0 space-y-5">

                        <div className="flex gap-5">
                            <Link to={"https://github.com/pronoyNath/Taste-Master-Client"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Client Side Code</button>
                            </Link>
                            <Link to={"https://github.com/pronoyNath/Taste-Master-server"} target="_blank">
                                <button className="flex items-center gap-2 py-2 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878]">Server Side Code</button>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={"https://tastemastershub.web.app/"} target="_blank">
                                <button className=" items-center gap-2 py-4 rounded-lg px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-sm bg-[#dbb878] w-full inline-flex justify-center">Live Demo</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;