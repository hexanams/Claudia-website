"use client"
import Image from 'next/image'
import { motion } from 'motion/react'
const MentalHealth = () => {
    const slideIn = (direction = "left", delay = 0) => ({
        hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } }
    });

    return (
        <section className='lg:px-20 lg:py-[6.3rem]'>
            <div className='p-5 lg:p-10 flex flex-col lg:flex-row gap-[38px] justify-center'>

                <motion.div
                    className='flex flex-col items-center lg:items-start gap-8 w-full lg:w-1/2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={slideIn("left", 0)}
                >
                    <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Thrive</div>

                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[#131313] font-extrabold text-xl lg:text-[2.5rem] text-left'>
                            Your Journey to Mental Well-Being Starts Here
                        </h1>
                        <h3 className='text-[#616161] font-light text-base lg:text-lg text-left'>
                            Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                        </h3>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-base lg:text-[1.3rem]'>Personalized Care</h2>
                            <p className='text-[#616161] text-sm lg:text-base font-light text-left'>
                                Experience tailored strategies that empower you to overcome challenges and achieve balance.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-base lg:text-[1.3rem]'>Compassionate Support</h2>
                            <p className='text-[#616161] text-sm lg:text-base font-light text-left'>
                                Our empathetic approach ensures you feel heard, valued, and understood throughout your journey.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full lg:w-1/2 flex items-center justify-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={slideIn("right", 0.2)}
                >
                    <Image
                        alt='mental-health'
                        src='/mental-health.svg'
                        width={557}
                        height={474}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default MentalHealth