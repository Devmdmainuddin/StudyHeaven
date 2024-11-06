import Hero from '@/components/banner/Hero';
import Faq from '@/components/home/Faq';
import PopularCourses from '@/components/home/PopularCourses';
import Teem from '@/components/home/Teem';
import Testimonials from '@/components/home/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses></PopularCourses>
            <Faq></Faq>
            <Teem></Teem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;