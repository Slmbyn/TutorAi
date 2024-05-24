import React from 'react'
import {motion} from 'framer-motion'
import '../index.css';



const HeroSection = () => {
  return (
    <motion.section 
        // initial={{ opacity: 0, scale: 0.5}}
        // animate={{ opacity: 1, scale: 1}}
        // transition={{ duration: .5 }}
    >

        <div className='h-[calc(100vh-2.5rem)] bg-[#121212] flex items-center justify-center'>
            <h1 className='text-white'>TutorAi</h1>
        </div>

    </motion.section>
  )
}

export default HeroSection
