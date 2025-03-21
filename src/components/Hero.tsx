"use client"
import Link from 'next/link'
import { motion } from 'motion/react'

const Hero = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className='relative h-[calc(100vh-120px)] flex flex-col justify-center lg:justify-start lg:items-start items-center p-5 py-5 lg:p-0 lg:py-0 w-full lg:px-[60px]'>
            <video
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                className="absolute top-0 left-0 w-full h-full blur-[0.5px] object-cover -z-10"
            >
                <source src="/Ocean_01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='bg-[#fffefcb8] w-full h-fit lg:h-full lg:max-w-[530px] z-10 p-5 lg:px-[60px] lg:pt-[10%] rounded-lg lg:rounded-none flex flex-col justify-start items-center backdrop-blur-sm'>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-2xl z-20 lg:text-5xl text-[#939393] font-light text-left font-canela'>
                    You deserve a life of empowerment and fulfilment.
                </motion.div>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-left tracking-normal text-grotesk text-xs lg:text-lg mt-6 font-light text-[#939393] leading-7'>
                    Therapy is not a linear process. It&lsquo;s filled with ups and downs, progress and setbacks, and moments of clarity mixed with times of confusion. People can have mixed feelings about how they see therapy but going to therapy doesn&lsquo;t mean something is wrong with you; it means you&lsquo;re taking steps to become the best version of yourself.
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
                        className='py-[10px] px-[20px] text-center tracking-[3px] leading-6 bg-[#C99D85] text-base w-fit rounded-lg text-white hover:bg-[#b48470] transition-colors'>
                        BOOK YOUR FREE CONSULTATION TODAY
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero