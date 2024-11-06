
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from '../shared/Container';


const Testimonials = () => {

    return (
        <section className='mt-[120px]'>
            <Container>
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>
                <div className='flex justify-center flex-col md:flex-row gap-6 items-center mt-[50px]'>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <div className="image w-full md:w-[440px] h-[280px] ">
                            <img src="/qc.png" alt="Image" className='w-full h-full object-cover rounded-sm' />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        
                        <div className=' mx-auto'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className='hover:no-underline'>
                                        <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className='hover:no-underline'>
                                        <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className='hover:no-underline'>
                                        <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className='hover:no-underline'>
                                        <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger className='hover:no-underline'>
                                        <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>

            </Container>




        </section>


    );
};

export default Testimonials;