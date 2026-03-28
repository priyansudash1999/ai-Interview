import React from 'react'
import { GiMonoWheelRobot } from "react-icons/gi";
import { GiSparkles } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa";
import { motion } from "motion/react"
import { signInWithPopup } from 'firebase/auth';
import { provider, auth } from '../utils/firebase';
import axios from "axios"
import { serverUrl } from '../App.jsx';

const Auth = () => {

  const handleGoogleAuth = async() => {
    try {
      const res = await signInWithPopup(auth, provider)
      let user = res.user
      let name = user.displayName
      let email = user.email
      const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials: true})
      console.log(result.data);
      
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className='bg-[#f8f8f8] w-full min-h-screen flex flex-col items-center justify-center px-6 py-20'>
      
      <motion.div 
        initial={{opacity:0, y:-40}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1.05}}
        className="w-full max-w-md p-8 rounded-3xl border flex flex-col items-center justify-start gap-2 bg-white shadow-black shadow-md">
        
        <div className='flex items-center justify-center gap-3 mb-6'>
          <div className='bg-black text-white p-2 rounded-lg'>
            <GiMonoWheelRobot size={18} />
          </div>
          
          <h2 className='font-semibold text-lg'>
            Interview With AI
          </h2>
        </div>
        <h1 className='text-2xl md:text-3xl text-center font-semibold mb-4'>
            Continue with
            <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                <GiSparkles size={18} className='text-black'/>
                AI Smart Interview
            </span>
        </h1>
        <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
            Sign In to start AI Powered Interview, track your progress and unlock details performance
        </p>
        <motion.button 
            onClick={handleGoogleAuth}
            whileHover={{opacity:0.9, scale: 1.04}}
            whileTap={{opacity:1, scale: 0.75}}
            className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md cursor-pointer'>
            <FaGoogle size={20} className='text-red-900'/>
            Continue with Google
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Auth