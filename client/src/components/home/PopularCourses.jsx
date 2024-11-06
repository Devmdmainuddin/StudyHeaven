import Container from "../shared/Container";



const PopularCourses = () => {
    const courses = [
        {
            title: 'Professional Graphic Design',
            image: '/h1.jpeg',
            category: 'Backend Developer',
            price:'15000'
        },
        {
            title: 'Motion Graphics',
            image: '/h2.jpeg',
            category: 'Backend Developer',
             price:'12000'
        },
        {
            title: 'UX/UI Design',
            image: '/h3.jpeg',
            category: 'Backend Developer',
             price:'18000'
        },
        {
            title: 'Digital Image Editing',
            image: '/h4.jpeg',
            category: 'Backend Developer',
            price:'28000'
        },
        {
            title: 'Adobe Photoshop',
            image: '/h2.jpeg',
            category: 'Backend Developer',
            price:'16000'
        },
        {
            title: 'Adobe Illustrator',
            image: '/h1.jpeg',
            category: 'Backend Developer',
            price:'22000'
        },
        {
            title: 'Digital Product Design',
            image: '/h4.jpeg',
            category: 'Backend Developer',
            price:'18000'
        },
    ]


    return (
        <div className="mt-[230px]">
            <Container>

                <h2 className="text-2xl font-semibold">Popular Courses</h2>
                <p className="text-[#9096B2] text-lg font-josefin font-normal">Discover the best courses in our platform</p>
                <div className="mt-[50px] flex flex-wrap justify-center gap-6">
                {courses.map((item, idx) =>
                    <div key={idx} className=" mb-3 w-[276px] bg-white rounded-sm shadow group  hover:shadow-[rgba(0,_0,_0,_0.1)_0px_10px_15px_-3px,_rgba(0,_0,_0,_0.05)_0px_4px_6px_-2px] transition-all duration-500">
                        <div className="image w-full h-[120px] overflow-hidden">
                            <img className=" w-full h-full object-cover rounded-tl-sm rounded-tr-sm group-hover:scale-125 transition-all duration-500" src={item.image} alt="" />
                        </div>
                        <div className="content p-3 ">
                            <h4 className=" text-[16px] font-bold font-heading capitalize">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.category}</p>
                            <p>
                                <span className="text-[#FB2E86] font-bold text-lg">
                                    ${item.price}
                                </span>

                                <span className="text-gray-500 text-sm">/Course</span>

                                <button className="block mt-3 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Enroll Now</button>
                            </p>
                        </div>

                    </div>
                )}
                </div>
                

            </Container>
        </div>
    );
};

export default PopularCourses;