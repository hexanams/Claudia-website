"use client"
import Link from 'next/link'
import { motion } from 'motion/react'

const Hero = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className='relative h-[calc(100vh-120px)] flex flex-col justify-center lg:justify-start lg:items-start items-center p-5 py-5 lg:py-0 w-full lg:px-14'>
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
            <div className='bg-[rgba(255,255,255,0.5)] w-full h-fit lg:h-full lg:w-[470px] z-10 p-5 lg:p-10 lg:py-10 rounded-lg lg:rounded-none flex flex-col justify-center items-center backdrop-blur-sm'>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-2xl z-20 lg:text-3xl text-[#C99D86] font-extrabold text-center font-canela'>
                    You deserve a life of empowerment and fulfillment,
                </motion.div>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-2xl lg:text-3xl text-[#C99D86] font-extrabold text-center font-canela'>
                    i am committed to helping you find it.
                </motion.div>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-center text-grotesk text-xs lg:text-sm mt-6 font-light text-[#C99D86]'>
                    Therapy is a journey of growth with ups and downs, and seeking it doesn&lsquo;t mean something is wrong with you—it means you&lsquo;re investing in becoming your best self. At empoweredtherapy.com, we&lsquo;re here to help you build a healthy relationship with yourself because you deserve a mind that&lsquo;s a good place to be.
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