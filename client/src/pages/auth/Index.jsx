import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import { useAddUserMutation, useLoginUserMutation } from "@/Featured/Auth/authApi";
import useAuth from "../../hooks/useAuth";



const AuthPage = () => {
    const [AddUser] = useAddUserMutation();
    const [LoginUser] = useLoginUserMutation()
    const { signIn, createUser, updateUserName, setLoading } = useAuth()
    const [showpassword, setshowpassword] = useState(null)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'


    const handleSignInSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const credentials = { email, password };

        try {

            const response = await LoginUser(credentials);

            if (response.data.success == true) {
                await signIn(email, password)
                const token = response.data.data.token;

                sessionStorage.setItem("accessToken", JSON.stringify(token));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " login Successful ",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            } else {

                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Invalid email or password",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {

            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userinfo = {
            name: name,
            email: email,
            password: password,
            role: 'user',
        };

        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const lowerCasePattern = /^(?=.*[a-z])/;
        const upperCasePattern = /^(?=.*[A-Z])/;
        const numberPattern = /^(?=.*[0-9])/;
        const specialCharPattern = /^(?=.*[!@#$%^&*])/;
        const lengthPattern = /^(?=.{8,})/;

        if (!email) {
            return showAlert("Enter your email");
        } else if (!emailPattern.test(email)) {
            return showAlert("Enter a Valid Email");
        } else if (!password) {
            return showAlert("Enter a password");
        } else if (!lowerCasePattern.test(password)) {
            return showAlert("Lower Case Must");
        } else if (!upperCasePattern.test(password)) {
            return showAlert("Upper Case Must");
        } else if (!numberPattern.test(password)) {
            return showAlert("Number Must");
        } else if (!specialCharPattern.test(password)) {
            return showAlert("Special Character Must");
        } else if (!lengthPattern.test(password)) {
            return showAlert("Password must be at least 8 characters");
        }

        try {

            setLoading(true)
            await createUser(email, password)
            await AddUser(userinfo);
            await updateUserName(name)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Signup Successful",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate('/');
        } catch (error) {
            setLoading(false)
            const errorMessage = error.data?.message || error.message || 'An error occurred during signup';
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const showAlert = (message) => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div>


            <Container>
                <Tabs defaultValue="login" className="flex justify-center items-center flex-col">
                    <TabsList className=' text-red-500 mt-6  flex justify-between bg-[#f4f2ff] py-2 p-0 rounded-none' >
                        <TabsTrigger value="login" className='capitalize py-2 px-5 rounded-none'>login</TabsTrigger>
                        <TabsTrigger value="registation" className='capitalize py-2 px-5 rounded-none'>registation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <div className='my-6 '>
                            <div className='w-full md:w-[544px] py-[50px] px-[56px] mx-auto shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] hover:shadow-[rgba(0,0,0,0.2)_0px_18px_50px_-10px] transition-all duration-500'>
                                <h2 className='text-[32px] font-josefin font-bold text-block text-center'>Sign in to your account</h2>
                                <p className='text-[#9096B2] text-lg font-josefin font-normal text-center'>Enter your email and password to access your account</p>
                                <form onSubmit={handleSignInSubmit} action="" >
                                    <div className='flex flex-col mt-9'>
                                        <input type="email" name='email' placeholder='Email Address' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                        <div className='relative'>
                                            <input type={showpassword ? "text" : "password"} name='password' placeholder='Password' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                            <span className="absolute right-3 top-1/2" onClick={() => setshowpassword(!showpassword)}>
                                                {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                                            </span>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsOpen(!isOpen)} className='text-[#9096B2] text-[17px] font-josefin font-normal mt-[13px]'>Forgot your password?</button>
                                    <Button className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign In</Button>


                                </form>


                                {/* <PasswordResetModal isOpen={isOpen} setIsOpen={setIsOpen}></PasswordResetModal> */}

                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="registation">
                        <div className='my-6 '>
                            <div className='w-full md:w-[544px] py-[50px] px-[56px] mx-auto shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] hover:shadow-[rgba(0,0,0,0.2)_0px_18px_50px_-10px] transition-all duration-500' >
                                <h2 className='text-[32px] font-josefin font-bold text-block text-center'>Create a new account</h2>
                                <p className='text-[#9096B2] text-lg font-josefin font-normal text-center'>Enter your details to get started</p>
                                <form onSubmit={handleSignUpSubmit} action=""  >
                                    <div className='flex flex-col mt-9'>

                                        <input type="text" name='name' placeholder='Full name ' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                        <input type="email" name='email' placeholder='Email Address' className='w-full mt-[22px] outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                        <div className='relative'>
                                            <input type={showpassword ? "text" : "password"} name='password' placeholder='Password' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                            <span className="absolute right-3 top-1/2" onClick={() => setshowpassword(!showpassword)}>
                                                {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                                            </span>
                                        </div>

                                    </div>

                                    <button type='submit' className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign up</button>


                                </form>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </Container>


        </div>
    );
};

export default AuthPage;