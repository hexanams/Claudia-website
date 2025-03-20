"use client"
import Link from 'next/link'
import { motion } from 'motion/react'

const Hero = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className='relative h-[calc(100vh-120px)] flex flex-col justify-center lg:justify-start lg:items-start items-center p-5 py-5 lg:py-0 w-full lg:px-24'>
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
            <div className='bg-[rgba(255,255,255,0.5)] w-full h-fit lg:h-full lg:w-[600px] z-10 p-5 lg:p-10 rounded-lg lg:rounded-none flex flex-col justify-center items-center backdrop-blur-sm'>
                <motion.h1
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-3xl z-20 lg:text-[2.5rem] text-[#C99D86] font-extrabold text-center xl:mx-10 font-grotesk'>
                    You deserve a life of empowerment and fulfillment.
                </motion.h1>
                <motion.h1
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-3xl lg:text-[2.5rem] text-[#C99D86] font-extrabold text-center xl:mx-10'>
                    I am committed to helping you find it.
                </motion.h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-center text-grotesk text-sm lg:text-lg mt-6 font-light text-[#C99D86]'>
                    Therapy is not a linear process. It&apos;s filled with ups and downs, progress and setbacks, and moments of clarity mixed with times of confusion. People can have mixed feelings about how they see therapy but going to therapy doesn&apos;t mean something is wrong with you; it means you&apos;re taking steps to become the best version of yourself.
                </motion.p>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-center text-grotesk text-sm lg:text-lg mt-6 font-light text-[#C99D86]'>At empoweredtherapy.com we believe that the best investment you can make is in yourself.  A healthy relationship with yourself is the foundation for a healthy relationship with others.
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
                    className='mt-8 flex gap-4 font-grotesk'>
                    <Link
                        href='/booking'
                        className='py-3 px-6 bg-[#C99D86] text-[#F2F2F2] text-base rounded'>
                        Book your free consultation today
                    </Link>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero