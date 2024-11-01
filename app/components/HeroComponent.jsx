"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"; 
import Link from 'next/link';

const HeroComponent = () => {
  return (
    <section className="lg:py-16">
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>Hello, I&apos;m{" "} </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Rami',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Software Engineer',
                        1000,
                        'Full-Stack Web Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                    In a world full of bugs, be the feature. 
                </p>
                <div>
                    <Link href="/#contact" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </Link>
                    <button className='hidden px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  mt-3'>
                       <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span> 
                    </button>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={250}
                    height={250}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroComponent