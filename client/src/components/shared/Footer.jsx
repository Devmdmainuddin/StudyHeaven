
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
    return (


        <footer className="bg-white">
            <Container>
                <div className="py-16 ">
                    <div className="lg:flex lg:items-start lg:gap-8">


                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">

                            <div className="">
                                <Link to='/' className="flex items-center">
                                    <span className="text-2xl font-bold text-gray-900 capitalize">StudyHeaven</span>
                                </Link>


                                <div>


                                    <p className="mt-4 text-gray-500">
                                        We believe that education should be affordable and accessible to all...
                                    </p>
                                </div>
                            </div>


                            <div className="">
                                <p className="font-medium text-gray-900">Services</p>

                                <ul className="mt-6 space-y-4 text-sm">


                                    <li>
                                        <Link to='/allscholarship' className="text-gray-700 transition hover:text-teal-500"> all scholarship </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-700 transition hover:text-teal-500"> apply scholarship </Link>
                                    </li>


                                </ul>
                            </div>

                            <div className="">
                                <p className="font-medium text-gray-900">Company</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link to="#" className="text-gray-700 transition hover:text-teal-500"> About </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-700 transition hover:text-teal-500"> Meet the Team </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-700 transition hover:text-teal-500"> Accounts Review </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="">
                                <p className="font-medium text-gray-900">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li> <Link to="#" className="text-gray-700 transition hover:text-teal-500"> Contact </Link></li>
                                    <li> <Link to="#" className="text-gray-700 transition hover:text-teal-500"> FAQs </Link></li>
                                    <li> <Link to="#" className="text-gray-700 transition hover:text-teal-500"> Live Chat </Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-8">
                        <div className="flex justify-center gap-x-8">
                            <p className="text-xs text-gray-500">&copy; 2024. <span className="text-teal-500" >StudyHeaven</span>. All rights reserved.</p>
                            <div className="flex gap-x-1"> <div className="w-[2px] h-[20px] bg-slate-400"></div><div className="w-[2px] h-[20px] bg-slate-400"></div>
                            </div>
                            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                                <li>
                                    <Link to="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </Link>
                                </li>

                                <li>
                                    <Link to="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </Link>
                                </li>

                                <li>
                                    <Link to="#" className="text-gray-500 transition hover:opacity-75"> Cookies </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

        </footer>
    );
};

export default Footer;