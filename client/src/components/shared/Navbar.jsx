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


const Navbar = () => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Coures Details',
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
        },
        {
            title: 'login',
            path: '/auth'
        }
    ]

    return (
        <div className="border-b">
            <Container>
                <div className="flex gap-6 items-center justify-between py-6  ">
                    <h1 className="text-2xl capitalize font-semibold">Study Heaven</h1>
                    <nav className="hidden md:inline-block">
                        <ul className="flex gap-6 items-center ">
                            {links.map((item, idx) => <li key={idx}><Link to={item.path}>{item.title}</Link></li>)}
                        </ul>
                    </nav>
                    <div className="w-10 h-10 rounded-full border bg-slate-200 relative hidden md:inline-block">
                        <img className="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="profile" />
                    </div>


                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger><RiMenu3Fill className="text-2xl" /></SheetTrigger>
                            <SheetContent side='right'>
                                <SheetHeader>
                                    <SheetTitle> <div className="flex mt-6 justify-between">
                                    <h1 className="text-2xl capitalize font-semibold">Study Heaven</h1>
                                        <div className="w-10 h-10 rounded-full border bg-slate-200 relative ">
                                            <img className="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="profile" />
                                        </div>
                                    </div></SheetTitle>
                                    <SheetDescription>
                                        <nav className=" mt-6">
                                            <ul className="flex gap-6  flex-col">
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