"use client"
import Link from 'next/link'
import { motion } from 'motion/react'

const Hero = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className='relative flex-grow flex flex-col justify-center items-center py-5 lg:py-0 w-full h-screen px-10 lg:px-[9.3rem]'>
            <video
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                className="absolute top-0 left-0 w-full h-full blur-[0.5px] object-cover -z-10"
            >
                <source src="/hero-image.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <motion.h1
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-3xl font-avenir lg:text-[2.5rem] text-gray-400 font-extrabold text-center lg:mx-[11.3rem]'>You deserve a life of empowerment and fulfilment.</motion.h1>
            <motion.h1
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-3xl font-avenir lg:text-[2.5rem] text-gray-400 font-extrabold text-center lg:mx-[11.3rem]'>  I am committed to helping you find it.
            </motion.h1>
            <motion.p
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-center text-sm lg:text-lg mt-6 font-light text-gray-400'>
                Therapy is not a linear process. It&apos;s filled with ups and downs, progress and setbacks, and moments of clarity mixed with times of confusion. People can have mixed feelings about how they see therapy but going to therapy doesn&apos;t mean something is wrong with you; it means you&apos;re taking steps to become the best version of yourself.
                At empoweredtherapy.com we believe that the best investment you can make is in yourself.  A healthy relationship with yourself is the foundation for a healthy relationship with others.
                You have to be in your mind 24/7 let&apos;s make it a nice place to be. I am committed to helping you get there.
            </motion.p>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='mt-8 flex gap-4 '>
                <Link
                    href='/about'
                    className='py-3 px-6 bg-[#C99D86] text-white text-base rounded'>
                    Learn More
                </Link>
                <Link
                    href='/contact'
                    className='py-3 px-6 text-[#C7C2BE] bg-[#F9F9F9] text-base rounded'>
                    Contact
                </Link>
            </motion.div>
        </div>
    )
}

export default Hero