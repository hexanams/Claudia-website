"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import Link from 'next/link'
import { motion, useInView } from 'motion/react'

const MidSection = () => {

    const images = ['image-gallery-1.svg', '/image-gallery-2.svg', '/image-gallery-3.svg']

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    }

    const staggeredFadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const MotionSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const ref = React.useRef(null)
        const inView = useInView(ref, { once: true, margin: "-100px" })
        return (
            <motion.div
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <>
            <motion.section
                className="flex flex-col justify-center items-center py-10 gap-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <MotionSection>
                    <div className="text-[#939393] font-extrabold text-2xl text-center px-5 lg:px-[270px] font-sweet-sans">
                        We uphold rigorous quality standards and follow ethical guidelines set by trusted regulatory bodies to ensure the safety and well-being of all our clients.
                    </div>
                </MotionSection>
                <motion.div className="flex flex-wrap justify-center items-center gap-6" variants={staggerContainer}>
                    {['/pschology-today.svg', '/bacp.svg', '/british-psychology.svg'].map((src, index) => (
                        <MotionSection key={index}>
                            <Image alt='organizations' src={src} width={181} height={47} priority />
                        </MotionSection>
                    ))}
                </motion.div>
            </motion.section>

            <MotionSection>
                <section className="p-5 lg:px-16 lg:py-20 bg-[url('/first-steps.svg')] w-full bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <h1 className='font-extrabold text-xl lg:text-5xl text-center text-[#939393]'>Take the First Step Today</h1>
                        <p className='text-base lg:text-lg text-[#939393] font-light text-center '>Your journey to mental well-being starts here. Reach out now to schedule your appointment or learn more about our services.</p>
                        <div
                            className="bg-[#C99D85] text-base w-fit rounded-lg text-white hover:bg-[#b48470] transition-colors">
                            <Link className="py-2 px-5 h-[56px] flex items-center" href='/booking'>
                                Book an appointment
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>

            <section className='p-5 lg:px-16 lg:py-20 flex flex-col gap-10 lg:gap-20'>
                <motion.div variants={staggeredFadeIn} className="flex flex-col items-center gap-6">
                    <h1 className=" font-extrabold text-2xl lg:text-5xl">Image Gallery</h1>
                    <p className=" font-light text-base lg:text-lg">Explore our inviting therapy spaces and events.</p>
                </motion.div>
                <div className='md:hidden flex justify-center'>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-xs"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className='w-screen'>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="pl-1">
                                    <MotionSection>
                                        <Image alt='image gallery' src={image} width={416} height={416} />
                                    </MotionSection>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <motion.div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5" variants={staggerContainer} initial="hidden" animate="visible">
                    {images.map((image, i) => (
                        <motion.div key={i} variants={fadeIn}>
                            <Image alt='image gallery' src={image} width={416} height={416} />
                        </motion.div>
                    ))}
                </motion.div>

            </section>
        </>
    )
}

export default MidSection
