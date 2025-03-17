"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'

const About = () => {
    const ref = React.useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    }

    return (
        <motion.section
            ref={ref}
            className='relative flex flex-col flex-grow bg-[#EEECEB]'
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <hr className='hidden lg:block absolute w-1/4 top-[3.8rem] ml-25 bg-[#C7C2BE]' />

            <div className='flex flex-col-reverse lg:flex-row gap-10 p-5 lg:py-20 lg:px-25'>
                <motion.div className='lg:w-1/2 flex flex-col gap-4' variants={fadeIn}>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[#131313] text-2xl lg:text-3xl font-avenir font-extrabold'>Hi there,</h1>
                        <h1 className='text-[#C99D86] font-avenir font-extrabold text-5xl lg:text-[3.5rem]'>I&apos;m Claudia</h1>
                    </div>


                    <div className='flex flex-col gap-5'>
                        <motion.p variants={fadeIn} className='text-xs lg:text-base text-[#131313]'>
                            I understand that life can be challenging and difficult to navigate at times. Perhaps you are experiencing low mood, anxiety or difficulties in your relationships. You can bring anything that is worrying you or causing you distress, confusion or pain. Sometimes, individuals are not sure why they are coming to see me. You might just feel things are not okay and feel a bit lost in life. You might be struggling to manage your feelings. You might want to engage in a journey of self-discovery and exploration. There is no right or wrong topic to bring and nothing that I would not consider important enough. Whatever is making you want to seek help is always justified and I can help you to explore further. Therapy can help to create shifts, movement and new energy that did not previously feel present or possible.
                        </motion.p>

                        <motion.p variants={fadeIn} className='text-xs lg:text-base text-[#131313]'>
                            My therapeutic approach is very rational and has a deep root in humanistic principals, meaning I am to create a space where you feel truly seen and understood. Therapy is a safe space for you to explore and make sense of your difficulties. Together, we&apos;ll explore what feels most challenging for you and work towards meaningful change and personal growth. For me, therapy is about self-development which can be a transformative process and a chance to uncover hidden wounds and shed light on patterns that may be causing and maintaining your difficulties.
                        </motion.p>

                        <motion.p variants={fadeIn} className='text-xs lg:text-base text-[#131313]'>
                            For the past 10 years I have undertaken rigours clinical training.  I have worked with children, young adults and adults supporting them with their psychological distress. I&apos;ve worked in both Ireland and the United Kingdom across various mental health services, such as the Health Service Executive (HSE), National Health Service (NHS), charity services, private settings, private rehabs, and staff support services. I have also worked in highly specialised services such as addiction and substance abuse, eating disorders and chronic health conditions.
                        </motion.p>

                        <motion.p variants={fadeIn} className='text-xs lg:text-base text-[#131313]'>
                            I am registered psychotherapist and soon to be Counselling Psychologist. I am a member with the British Psychological Society, and the British Association for Counselling and Psychotherapy. I am currently in my final year of my Doctorate in Counselling Psychology at City, University of London.

                        </motion.p>
                    </div>
                </motion.div>

                <motion.div className="relative lg:w-fit h-fit" variants={fadeIn}>
                    <div className="hidden xl:inline w-[520px] h-[621px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
                    <Image
                        className="relative z-10"
                        alt="image gallery"
                        src="/Claudia.svg"
                        width={520}
                        height={621}
                        fetchPriority="high"
                        priority
                        unoptimized
                    />
                </motion.div>
            </div>

            <hr className='hidden font-avenir lg:block absolute w-full bottom-20 bg-[#C7C2BE]' />
        </motion.section>
    )
}

export default About
