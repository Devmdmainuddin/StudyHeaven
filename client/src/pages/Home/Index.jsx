import Hero from '@/components/banner/Hero';
import PopularCourses from '@/components/home/PopularCourses';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;