import Container from "../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
const Hero = () => {

    return (
        <div className="bg-teal-50 ">
            <Container className=''>
                <div className="flex flex-wrap items-center  pt-12 pb-[130px] relative">


                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                        <span className="font-semibold text-xs text-teal-500">What's new at StudyHeaven</span>
                        <h2 className="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">Become an IT Pro & Rule the Digital World</h2>
                        <div className="max-w-lg mb-6 lg:mb-12">
                            <p className="text-xl text-gray-500">With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>
                        </div>
                        <div className="flex flex-wrap">
                            <Link className="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-teal-500 text-white hover:text-teal-500 hover:bg-transparent border hover:border-teal-500 rounded transition-all duration-500"
                            href="#">Browse Couse</Link>
                            <Link className="inline-block px-6 py-4 mb-3 text-sm font-medium leading-normal text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 rounded border transition-all duration-500"
                                href="#">Learn More</Link>
                        </div>
                    </div>
                    <div className=" w-full md:w-1/2 h-[324px] px-4">
                        <img className="w-full h-full object-cover" src="/hero.webp" alt="" />
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-[130px] w-2/3    flex gap-6 flex-wrap" >
                        <Swiper
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                615: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                                872: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                },
                                1145: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 1,
                                },
                            }}
                            spaceBetween={10}

                            className="mySwiper featured-products "
                        >

                            <SwiperSlide >
                                <div className="   bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h1.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize">networking tecnology</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="   bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h2.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize"> cyber security</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=" bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h3.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize"> film & media</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=" bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h4.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize"> english language</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=" bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h2.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize">Cloud computing</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=" bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h1.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize">graphic & multimedia</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=" bg-white rounded-sm shadow flex justify-center items-center flex-col">
                                    <div className="image w-full h-[120px]">
                                        <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm" src="/h4.jpeg" alt="" />
                                    </div>
                                    <div className="content px-6 py-3  h-[130px]">
                                        <h4 className="m-1 text-[16px] font-bold font-heading capitalize">web & software</h4>
                                        <p className="text-gray-500 text-sm">Backend Developer</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>




                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Hero;