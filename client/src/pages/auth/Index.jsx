import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import { useAddUserMutation, useLoginUserMutation } from "@/Featured/Auth/authApi";


const AuthPage = () => {
    const[AddUser]=useAddUserMutation();
    const[LoginUser]=useLoginUserMutation()
    const [showpassword, setshowpassword] = useState(null)

    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'

    const handleSignInSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const info = {
            email: email,
            password: password,
        }
        try {
         const loginuserinfo=   await LoginUser(info)
            console.log(loginuserinfo)
           if(loginuserinfo?.data?.success === true){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " login Successful ",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from)
           }else{
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
                    title: "Invalid email or password",
                    showConfirmButton: false,
                    timer: 1500
                });
               
                
              }



    }

    const handleSignUpSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const userinfo = {
            name:name,
            email: email,
            password:password,
            role: 'user',
        }
       
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let lowerChar = /^(?=.*[a-z])/
        let upperChar = /^(?=.*[A-Z])/
        let number = /^(?=.*[0-9])/
        let specil = /^(?=.*[!@#$%^&*])/
        let minMax = /^(?=.{8,})/

        if (!email) {
            // setEmailError("Enter your email");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter your email",
				showConfirmButton: false,
				timer: 1500
			});
        
        } else if (!pattern.test(email)) {
            // setEmailError("Enter a Valid Email");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter a Valid Email",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!password) {
            // setPasswrdError("Enter a password");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter a password",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!lowerChar.test(password)) {
            // setPasswrdError("Lower Case Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Lower Case Must",
				showConfirmButton: false,
				timer: 1500
			});
           
        } else if (!upperChar.test(password)) {
            // setPasswrdError("Upper Case Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Upper Case Must",
				showConfirmButton: false,
				timer: 1500
			});
          
        } else if (!number.test(password)) {
            // setPasswrdError("Number Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Number Must",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!specil.test(password)) {
            // setPasswrdError("Specil charator Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Specil charator Must",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!minMax.test(password)) {
            // setPasswrdError("min-8 max-16");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "min-8 max-16",
				showConfirmButton: false,
				timer: 1500
			});
            return
        }

        try {
        
        //    await AddUser(userinfo)
        console.log(userinfo);
        await AddUser(userinfo)
            // dispatch(registerUser(userinfo))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "signup Successful",
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/')

        }
        catch (error) {
                console.error('Error during signup:', error);
                const errorMessage = error.data?.message || error.message || 'An error occurred during signup';
                console.error('Server response:', error.data); // Log the full error response for debugging
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            
        
    }

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
                            <Button  className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign In</Button>


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

                                <input type="text" name='name' placeholder='First name (optional)' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
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