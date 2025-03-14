"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

const Experiences = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <>
            <section className="relative p-5 lg:px-16 lg:py-20">
                <Image
                    alt='quote'
                    src='/top-quotes.svg'
                    width={40}
                    height={20}
                    priority
                    className="absolute md:w-[100px] md:h-[50px] lg:w-[177px] lg:h-[137px] top-[10px] left-[20px] lg:top-[65px] lg:left-[127px]"
                // fill
                />
                <Image
                    alt='quote'
                    src='/bottom-quotes.svg'
                    width={40}
                    height={20}
                    priority
                    className="absolute md:w-[100px] md:h-[50px] lg:w-[177px] lg:h-[137px] bottom-[10px] right-[20px] lg:bottom-[31px] lg:right-[198px]"
                // fill
                />
                <motion.div
                    className="p-5 lg:py-12 lg:px-36 flex flex-col gap-4 lg:gap-8 justify-center items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="bg-[#EEECEB] py-2 px-4 rounded-3xl text-[#C7C2BE] text-base font-extrabold" variants={textVariants}>
                        A Journey From Struggle to Strength
                    </motion.div>
                    <div className="px-5 lg:px-10 w-full flex flex-col justify-center gap-4 mx-auto max-w-5xl">
                        <Carousel setApi={setApi} className="w-full lg:max-w-5xl">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="flex flex-col items-start justify-center p-4">
                                        <h3 className="text-[#939393] font-light text-base lg:text-lg text-left">
                                            “I was unsure about starting therapy, but Claudia was able to quickly put my mind at ease. She really helped me to explore and understand my problems in a kind and empathetic way. Claudia was caring and non-judgemental at a time when I really needed that in my life. I gained so much from her support and feel so much more able to handle life stress confidently and put myself first. Thank you, Claudia!”
                                        </h3>
                                        <h3 className='mt-[14px] font-avenir text-sm lg:text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex flex-col items-start justify-center p-4">
                                        <h3 className="text-[#939393] font-light text-base lg:text-lg text-left">
                                            “Working with Claudia has been life-changing. From our very first session, I felt truly seen and heard. She patiently helped me unpack years of self-doubt and stress, giving me the clarity I desperately needed. Her gentle approach and insightful guidance empowered me to heal and rebuild my confidence. I now approach life with a sense of calm and resilience I never thought possible. I&apos;m incredibly grateful for her support and encouragement.”
                                        </h3>
                                        <h3 className='mt-[14px] font-avenir text-sm lg:text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="flex flex-col items-start justify-center p-4">
                                        <h3 className="text-[#939393] font-light text-base lg:text-lg text-left">
                                            “I was feeling completely overwhelmed by my anxiety, but Claudia’s warmth and professionalism made all the difference. She provided a safe, welcoming space where I could talk openly without fear of judgment. Claudia helped me uncover patterns in my thinking and gave me practical tools to manage my emotions. Thanks to her guidance, I feel stronger, more grounded, and better equipped to face challenges. I can&apos;t thank her enough for helping me regain control over my life.”
                                        </h3>
                                        <h3 className='mt-[14px] font-avenir text-sm lg:text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </div>
                                </CarouselItem>


                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <div className="flex items-center justify-center mt-4 gap-2">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${index + 1 === current ? 'bg-[#C99D86]' : 'bg-[#C4C4C4]'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </section >

            <section className="flex flex-col justify-center items-center">
                <motion.div
                    className="text-[#131313] font-extrabold text-2xl text-center px-5 lg:px-[270px]"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    We uphold rigorous quality standards and follow ethical guidelines set by trusted regulatory bodies to ensure the safety and well-being of all our clients.
                </motion.div>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-6 pt-[3.7rem] pb-[4.9rem]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {['/pschology-today.svg', '/bacp.svg', '/british-psychology.svg'].map((src, index) => (
                        <motion.div key={index} variants={imageVariants}>
                            <Image alt='organizations' src={src} width={index === 2 ? 234 : 362} height={index === 2 ? 128 : 94} priority />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="p-5 lg:px-16 lg:py-20">
                <div className="lg:p-10 flex flex-col lg:flex-row gap-[38px] justify-between items-center">
                    <motion.div
                        className="flex flex-col items-center lg:items-start gap-8 lg:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit" variants={textVariants}>
                            Empathy
                        </motion.div>
                        <motion.div className="flex flex-col gap-6" variants={textVariants}>
                            <h1 className="font-avenir text-[#939393] font-extrabold text-xl lg:text-[2.5rem] text-left">
                                Your Journey to Mental Well-Being Starts Here
                            </h1>
                            <h3 className="text-[#939393] font-light text-base font-avenir lg:text-lg text-left">
                                Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                            </h3>
                        </motion.div>
                        <motion.div
                            className="bg-[#C99D85] text-base w-fit rounded-lg text-white hover:bg-[#b48470] transition-colors"
                            variants={textVariants}>
                            <Link className="py-2 px-5 h-[56px] flex items-center" href='/booking'>
                                Book an appointment
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center items-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Image
                            alt='mental-health'
                            src='/mental-well-being.svg'
                            width={616}
                            height={640}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Experiences