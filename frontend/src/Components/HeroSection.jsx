import React from 'react'
import {motion} from 'framer-motion'
import '../index.css';
import heroImage from '../Images/banner.png'


const HeroSection = () => {
  return (
    <motion.section>
        <div className='h-[calc(100vh-1.5rem)] bg-[#121212] flex items-center justify-center'>
            <motion.img
                initial={{ opacity: 0, scale: 0.6}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: .5 }}
                src={heroImage} alt="heroImage" className='w-full h-[calc(100vh-2.5rem)] object-cover'/>
            
        </div>
        {/* <div className='h-[calc(100vh-2.5rem)] bg-[#121212] flex items-center justify-center'>
            <motion.h1 
                initial={{ opacity: 0, scale: 0.6}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: .5 }}
                className='text-white text-3xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'
            >
                TutorAi</motion.h1>
        </div> */}


    </motion.section>
  )
}

export default HeroSection
