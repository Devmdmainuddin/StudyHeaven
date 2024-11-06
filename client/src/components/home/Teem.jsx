import React from 'react';
import Container from '../shared/Container';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Teem = () => {
    return (
        <div className='pt-[75px] bg-[#e8e8e8]'>
            <Container>
                <div>
                    <div className="mb-16 text-center">
                        
                        <span className="font-semibold text-sm text-teal-500">What's new at Shuffle</span>
                        <h3 className="my-4 text-3xl md:text-5xl leading-tight text-[#5d6f93] font-bold tracking-tighter capitalize">Our team is the best in the business.</h3>
                        <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Highly professional and capable of running your business across all digital channels.</p>
                        <div className="flex flex-wrap justify-center">
                            <Link className="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-teal-500 text-white hover:text-teal-500 hover:bg-transparent border hover:border-teal-500 rounded transition-all duration-500"
                                href="#">Open Positions</Link>
                            <Link className="inline-block px-6 py-4 mb-3 text-sm font-medium leading-normal bg-white text-teal-500 border-white hover:text-white hover:bg-teal-500 rounded border transition-all duration-500"
                                href="#">About Us</Link>

                        </div>

                    </div>

                    <div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="mb-6 w-full md:w-1/2 px-4">
                                <div className="flex flex-wrap items-center bg-white rounded overflow-hidden">
                                    <img className="w-full lg:w-1/3 h-80 object-cover" src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="" />
                                    <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                                        <h4 className="mb-2 text-2xl font-bold font-heading">Danny Bailey</h4>
                                        <p className="mb-4 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.</p>
                                        <div className="flex">
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaLinkedinIn className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaTwitter className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaFacebookF className='text-[16px] text-teal-500' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 w-full md:w-1/2 px-4">
                                <div className="flex flex-wrap items-center bg-white rounded overflow-hidden">
                                    <img className="w-full lg:w-1/3 h-80 object-cover" src="https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="" />
                                    <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                                        <h4 className="mb-2 text-2xl font-bold font-heading">Ian Brown</h4>
                                        <p className="mb-4 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.</p>
                                        <div className="flex">
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaLinkedinIn className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaTwitter className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaFacebookF className='text-[16px] text-teal-500' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 w-full md:w-1/2 px-4">
                                <div className="flex flex-wrap items-center bg-white rounded overflow-hidden">
                                    <img className="w-full lg:w-1/3 h-80 object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="" />
                                    <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                                        <h4 className="mb-2 text-2xl font-bold font-heading">Daisy Carter</h4>
                                        <p className="mb-4 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.</p>
                                        <div className="flex">
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaLinkedinIn className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaTwitter className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaFacebookF className='text-[16px] text-teal-500' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 w-full md:w-1/2 px-4">
                                <div className="flex flex-wrap items-center bg-white rounded overflow-hidden">
                                    <img className="w-full lg:w-1/3 h-80 object-cover" src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="" />
                                    <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                                        <h4 className="mb-2 text-2xl font-bold font-heading">Danny Bailey</h4>
                                        <p className="mb-4 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.</p>
                                        <div className="flex">
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaLinkedinIn className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex mr-2 items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaTwitter className='text-[16px] text-teal-500' />
                                            </Link>
                                            <Link className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-500"  >
                                                <FaFacebookF className='text-[16px] text-teal-500' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Teem;