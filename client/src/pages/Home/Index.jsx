import Hero from '@/components/banner/Hero';
import PopularCourses from '@/components/home/PopularCourses';
import Testimonials from '@/components/home/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses></PopularCourses>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;