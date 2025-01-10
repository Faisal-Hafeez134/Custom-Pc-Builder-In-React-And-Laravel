import React from "react";
import facebookImage from "../assets/facebook.png";
import googleImage from "../assets/google.png";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useGoogleLogin,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const SignUpView = () => {
  
  // const [post,setPost] = useState({
  //   name:'',
  //   email:'',
  //   address:'',
  //   password:'',
  //   confirmed_password:''
  // });

  // const handleInput = (event) => {
  //   setPost({...post, [event.target.name]: event.target.value});
  // }

  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("@ is required").required("email is required"),
    address: yup.string().required("address is required"),
    password: yup.string().min(4,"password should not be less than 4").max(20,"password should not be greater than 20").required("password is required"),
    confirmed_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
  
    // event.preventDefault();
    // console.log(data);
    try{
  const response =  await axios.post('http://127.0.0.1:8000/api/register',data)
    console.log(response); // Check the full response
    toast.success("Form submitted successfully!");
  } 
    catch (err) {
      if (err.response) {
        // Error returned from the backend
        console.error('Server Response:', err.response.data);
        // Handling specific validation error message
        if (err.response.data.errors) {
          // Display specific error from backend
          toast.error(err.response.data.errors.join(' '));
        } else {
          toast.error(err.response.data.message || 'An error occurred');
        }
      } else {
        // Network error or other issues
        console.error('Network Error:', err);
        toast.error('Network error. Please try again.');
      }
    }
  };
  
  // const login = useGoogleLogin({
    
  //   onSuccess:  handleSuccess
  // });

  // const handleSuccess = (credentialResponse) =>{
  //   console.log(credentialResponse)
  // }

  // const login = useGoogleLogin({
  //   onSuccess: (credentialResponse) => {
  //     console.log("Success:", credentialResponse);
  //   },
  //   onError: () => {
  //     console.error("Login Failed");
  //   },
  //   flow: "implicit", // Optional: Ensure the login flow is correctly set
  // });

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/social-signup");
      toast.success("Logged in with Google successfully!");
      // console.log("Google Auth Response:", response.data);
    } catch (error) {
      console.log(credentialResponse)
      console.error("Google Authentication Error:", error);
      toast.error("Failed to log in with Google. Please try again.");
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: () => toast.error("Google login failed. Please try again."),
  });


  return (
    <>
    
      <section className="min-h-screen flex items-center justify-center bg-[#101828] px-4">
        <div className="bg-[#96B8FA] w-full max-w-[450px] rounded-[34px] overflow-hidden text-center font-[inter] m-[12px]">
          <div className="py-[40px] px-6">
            <h1 className="pb-[40px] font-bold text-[32px] sm:text-[40px] text-white">
              Signup Now
            </h1>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <input
                placeholder="Username" 
                className="bg-[#DCE8FF] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] focus:outline-none px-[20px] mb-[20px] sm:mb-[30px]"
                {...register("name")}
              />
              <input
                placeholder="Email or Username" 
                className="bg-[#DCE8FF] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] focus:outline-none px-[20px] mb-[20px] sm:mb-[30px]"
                {...register("email")}
              />
              <p>{errors.name?.message}</p>
              <input
                placeholder="Password"
                type="password"
                className="bg-[#DCE8FF] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] focus:outline-none px-[20px] mb-[20px] sm:mb-[30px]"
                {...register("password")}
              />
              <input
                placeholder="Confirm Password"  
                type="password"
                className="bg-[#DCE8FF] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] focus:outline-none px-[20px] mb-[20px] sm:mb-[30px]"
                {...register("confirmed_password")}
              />
              <input
                placeholder="Address"
                className="bg-[#DCE8FF] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] focus:outline-none px-[20px] mb-[20px] sm:mb-[30px]"
                {...register("address")}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#0D43AA] w-full max-w-[335px] h-[50px] sm:h-[60px] rounded-[10px] text-[24px] sm:text-[32px] font-bold text-white mb-5"
              >
                SIGNUP
              </button>
            </form>

            <p className="pb-[20px] text-[14px] sm:text-[16px] font-semibold">Or Signup with</p>

            {/* Social Signup */}
            <div className="flex justify-center gap-4 pb-[30px]">
              <div onClick={login} className="bg-[#DCE8FF] w-full max-w-[155px] h-[38px] flex items-center justify-center rounded-[10px] px-[14px] gap-2">
                <img src={googleImage} alt="Google" />
                <p className="text-sm font-medium">Google</p>
              </div>

              <div className="bg-[#DCE8FF] w-full max-w-[155px] h-[38px] flex items-center justify-center rounded-[10px] px-[14px] gap-2">
                <img src={facebookImage} alt="Facebook" />
                <p className="text-sm font-medium">Facebook</p>
              </div>
            </div>

            <p className="text-sm sm:text-base">
              Already have an account?{" "}
              <a href="/login" className="text-[#FFC107]">
                Login now
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpView;
