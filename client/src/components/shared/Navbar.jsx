import { Link } from "react-router-dom";
import Container from "./Container";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu3Fill } from "react-icons/ri";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { user, logOut } = useAuth()
    const [proOpen, setProOpen] = useState(false);

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Coures',
            path: '/'
        },
        {
            title: 'Support',
            path: '/'
        },
        {
            title: 'Blog',
            path: '/'
        },
        {
            title: 'My Classes',
            path: '/'
        }
       
    ]
    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.99) {
                setProOpen(false)
            } 
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])
    console.log(user);
    return (
        <div className="border-b">
            <Container>
                <div className="flex gap-6 items-center justify-between py-6  relative">
                    <h1 className="text-2xl uppercase font-semibold">Study<span className="text-teal-500">Heaven</span> </h1>
                    <nav className="hidden md:inline-block">
                        <ul className="flex gap-6 items-center ">
                            {links.map((item, idx) => <li key={idx}><Link to={item.path} className="hover:text-teal-500 transition-all duration-300">{item.title}</Link></li>)}
                        </ul>
                    </nav>
                    <div onClick={() => setProOpen(!proOpen)} className="w-10 h-10 rounded-full border bg-slate-200 relative hidden md:inline-block">
                        <img className="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="profile" />
                    </div>
                    {proOpen && (
                        <div className=" absolute z-50 top-full right-1 translate-y-0">
                            <div className="w-[263px] block  bg-[#ffffff] ">
                                <div className="button flex flex-col  w-full">
                                    {user ? (
                                        <>
                                            <Link onClick={() => setProOpen(!proOpen)} to='/dashboard' className="py-4  px-3 lg:px-10 text-white bg-[#FB2E86] text-center w-full  ">My Account</Link>
                                            <button onClick={logOut} className="py-4 px-3 lg:px-10 bg-white text-[#FB2E86]  w-full mt-0  border text-center">logOut</button>
                                        </>
                                    )
                                        :
                                        (
                                            <Link onClick={() => setProOpen(!proOpen)} to='/auth' className="py-4  px-3 lg:px-10 text-white bg-[#FB2E86] text-center w-full   uppercase">login</Link>)}

                                </div>
                            </div>
                        </div>
                    )}

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger><RiMenu3Fill className="text-2xl" /></SheetTrigger>
                            <SheetContent side='right'>
                                <SheetHeader>
                                    <SheetTitle> <div className="flex mt-6 justify-between relative">
                                        <h1 className="text-2xl capitalize font-semibold">Study Heaven</h1>
                                        <div onClick={() => setProOpen(!proOpen)} className="w-10 h-10 rounded-full border bg-slate-200 relative ">
                                            <img className="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="profile" />
                                        </div>
                                        {proOpen && (
                                            <div className=" absolute z-50 top-full right-1 translate-y-0">
                                                <div className="w-[263px] block  bg-[#ffffff] ">
                                                    <div className="button flex flex-col  w-full">
                                                        {user ? (
                                                            <>
                                                                <Link onClick={() => setProOpen(!proOpen)} to='/dashboard' className="py-4  px-3 lg:px-10 text-white bg-[#FB2E86] text-center w-full  ">My Account</Link>
                                                                <button onClick={logOut} className="py-4 px-3 lg:px-10 bg-white text-[#FB2E86]  w-full mt-0  border text-center">logOut</button>
                                                            </>
                                                        )
                                                            :
                                                            (
                                                                <Link onClick={() => setProOpen(!proOpen)} to='/auth' className="py-4  px-3 lg:px-10 text-white bg-[#FB2E86] text-center w-full   uppercase">login</Link>)}

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div></SheetTitle>
                                    <SheetDescription>
                                        <nav className=" mt-6">
                                            <ul className="flex gap-6 items-start flex-col">
                                                {links.map((item, idx) => <li key={idx}><Link to={item.path}>{item.title}</Link></li>)}
                                            </ul>
                                        </nav>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Navbar;