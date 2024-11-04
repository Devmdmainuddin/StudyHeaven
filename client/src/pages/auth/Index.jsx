import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';


const AuthPage = () => {
    const [showpassword, setshowpassword] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value
        const userinfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: 'user',
            status: 'verified',
        }
        console.log(userinfo);
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
        }
        else if (!lastName) {
            // setFullNameError("Enter YouFull Name");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter YouFull Name",
				showConfirmButton: false,
				timer: 1500
			});
        }
        else if (!password) {
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

            const errorCode = error.code;
            if(errorCode.includes("email")){
            //   setEmailError("Email already in use")
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Email already in use",
                showConfirmButton: false,
                timer: 1500
            })
            }
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
                        <form onSubmit={handleSubmit} action="" >
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
                            <button className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign In</button>


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
                        <form onSubmit={handleSubmit} action=""  >
                            <div className='flex flex-col mt-9'>

                                <input type="text" name='firstName' placeholder='First name (optional)' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="text" name='lastName' placeholder='Last name' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
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