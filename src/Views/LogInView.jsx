import React, { useState } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import facebookImage from '../assets/facebook.png';
import googleImage from '../assets/google.png';
import { MdSettingsApplications } from 'react-icons/md';
import axios from 'axios';
import { set } from 'react-hook-form';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'; 
import { login } from '../features/auth/authSlice';



const LogInView = () => {
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login",{email,password});
      setMessage(response.message);
      // toast.success("Form submitted successfully!" + response.data.token);
      toast.success("Form submitted successfully!");
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);

      const { token, user } = response.data;

  dispatch(login({ token, user }));


       navigate('/');

    } catch(error)
    {
      toast.error(error.response.data.message);
      console.log('error loggin in',error);
      setMessage('An error occured');
    }
  };

  
  return (
    
    <>
    <section>

<div className=' flex items-center justify-center h-screen bg-[#101828]'>

<div className='bg-[#96B8FA] w-[451px] h-[645px] rounded-[34px] overflow-hidden text-center items-center font-[inter] m-[12px]'>
   
   <form onSubmit={handleSubmit}>
   <div className='py-[56px]'>
    <h1 className='pb-[50px] font-bold text-[40px] text-white'>Login Now</h1>
    <div className='flex flex-col items-center pb-[30px]'>
    <input type='email' placeholder='Enter email' className='bg-[#DCE8FF] pb-[30px] md:w-[335px] md:h-[60px] h-[40px] py-[30px] rounded-[10px]  focus:outline-none px-[20px] mb-[30px]'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    ></input>
    <input placeholder='Enter Password' className='bg-[#DCE8FF] pb-[30px] w-[335px] h-[60px] py-[30px] rounded-[10px]  focus:outline-none px-[20px] '
    value={password}
    onChange={(e) => setPassword(e.target.value)}></input>
    </div>

    <button onClick={handleSubmit} className='bg-[#0D43AA] w-[335px] h-[60px] rounded-[10px] px-[30px] text-[32px] font-bold text-white mb-5'>LOGIN</button>

    <p className='pb-[30px] text-[16px] font-semibold'>Or login with</p>

    <div className='flex items-center justify-center jsutify-center text-center pb-[40px] gap-5 text-[#1877F2]'>

    <div className='bg-[#DCE8FF] w-[155px] h-[38px] flex rounded-[10px]  px-[14px] gap-2'>

        <span className=' flex items-center justify-between'><img src={googleImage} /></span>
        <p className=' flex items-center justify-between'>Google</p></div>

        <div className='bg-[#DCE8FF] w-[155px] h-[38px] flex rounded-[10px] px-[14px] gap-2 overflow-hidden'>
        <span className=' flex items-center justify-between'> <img src={facebookImage}  /> </span>
        <p className=' flex items-center '>Facebook</p>
        
        </div>
    

    </div>

    

    

    <div className='flex'></div>
    <p>Not a member? <a className='text-[#FFC107]'>Signup now</a></p>
   </div>
   </form>

</div>
</div>

    </section>
    </>
  )
}

export default LogInView