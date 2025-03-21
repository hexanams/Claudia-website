"use client"
import Autoplay from 'embla-carousel-autoplay'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const FAQ = () => {
    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.8, delay }
        },
    });

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };

    const staggeredFadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const MotionSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const ref = React.useRef(null);
        const inView = useInView(ref, { once: true, margin: "-100px" });

        return (
            <motion.div
                ref={ref}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        );
    };


    const questions = [
        {
            question: 'What happens after your initial enquiry? ',
            answer: 'Following your initial enquiry with us, we will arrange an initial 15 minute consultation call with me to find our more about your enquiry, needs and therapeutic goals. If you are happy to proceed we will then arrange your first full appointment.'
        },
        {
            question: 'How long would the sessions be?',
            answer: 'Psychological therapy sessions are 50 minutes in duration, this is standard practice. Weekly attendance is required in order for you to fully benefit from therapy as it provides structure and consistency to the therapeutic work.'
        },
        {
            question: 'How much are your fees?',
            answer: 'You can view our prices page here.If you have further questions regarding prices please do not hesitate to contact us.'
        },
        {
            question: 'How do I pay?',
            answer: ' Payments can be made at the end of each session or I can invoice you on a monthly basis.'
        },
        {
            question: 'What is the cancelation policy?',
            answer: 'We will always try our best to accommodate your needs should you need to reschedule or cancel your appointment, however late cancellations and missed appointments are payable in full unless 48 hours notice is given or an exceptional circumstance has arisen.'
        }
    ]

    const images = ['image-gallery-1.svg', '/image-gallery-2.svg', '/image-gallery-3.svg']

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <><section className="p-5 lg:py-20 lg:px-[12.5rem] flex flex-col items-center gap-10 lg:gap-20">
            <div className="w-fit flex flex-col justify-center items-center gap-6">
                <div className="text-3xl font-canela lg:text-5xl font-extrabold ">FAQs</div>
                <p className="text-lg font-light text-center ">
                    Find answers to common questions about our services and how we can support you.
                </p>
            </div>

            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#EEECEB] w-full rounded-2xl"
            >
                <Accordion type="multiple" className="px-5 lg:px-20 py-5 nth-last-[border-none]:">
                    {questions.map((question, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn("up", 0.2 + i * 0.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='border-b border-b-black last:border-none'
                        >
                            <AccordionItem value={`item-${i}`}>
                                <AccordionTrigger className="py-2 lg:py-5 text-base lg:text-lg font-extrabold font-canela">
                                    {question.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 font-grotesk">
                                    {question.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>

            <div className="w-full lg:w-[560px] flex flex-col justify-center items-center">
                <div className="font-canela text-xl lg:text-3xl font-extrabold ">Still have questions?</div>
                <p className="my-2 lg:mt-4 lg:mb-6 text-base lg:text-lg font-light ">We&apos;re here to help you!</p>
                <Link href='/contact' className="py-2 px-5 bg-[#C99D86] text-white rounded-md">Contact</Link>
            </div>
        </section>

            <section className="p-5 lg:px-16 lg:py-20 flex flex-col gap-10 lg:gap-20">
                <motion.div
                    variants={staggeredFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="font-canela font-extrabold text-2xl lg:text-5xl text-[#939393]">Image Gallery</div>
                    <p className="font-light text-base lg:text-lg text-[#939393]">Explore our inviting therapy spaces and events.</p>
                </motion.div>

                {/* Mobile Carousel */}
                <div className="md:hidden flex justify-center">
                    <Carousel plugins={[plugin.current]} className="w-full max-w-xs">
                        <CarouselContent className="w-screen">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="pl-1">
                                    <MotionSection>
                                        <Image alt="image gallery" src={image} width={416} height={416} />
                                    </MotionSection>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* Desktop Grid */}
                <motion.div
                    className="hidden lg:grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {images.map((image, i) => (
                        <motion.div key={i} variants={fadeIn("up", 0.2 + i * 0.1)}>
                            <Image alt="image gallery" src={image} width={416} height={416} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>


        </>
    )
}

export default FAQ