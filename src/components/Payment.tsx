"use client"
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const Payment = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    }

    React.useEffect(() => {
        if (!api) {
            return
        }

        // setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)

        })
    }, [api])

    return (
        <>
            <section
                className="px-5 h-[350px] lg:h-[434px] md:px-[6.3rem] pb-14 bg-[url('/payment.svg')] w-full bg-cover bg-center bg-no-repeat flex items-end"
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h1 className='text-[#F2F2F2] text-xl md:text-5xl  font-extrabold'>Book a Payment and Fees</h1>
                    <p className='text-xs text-white lg:text-lg font-light mt-3'>We believe that quality mental health care should be accessible and transparent. Below, you&apos;ll find information about our session fees, payment options, and insurance coverage. If you have any questions, please don&apos;t hesitate to reach out—we&apos;re happy to help.</p>
                </motion.div>
            </section>

            <section className='px-9 py-10 flex flex-col justify-center bg-[#EEECEB] items-center'>
                <motion.div className='w-full md:w-fit flex flex-col lg:flex-row justify-center gap-8 items-center' variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {['payment-1.svg', 'payment-2.svg'].map((src, index) => (
                        <motion.div key={index} className="w-full md:w-[559px] h-[261px] px-36 py-8 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/${src}')` }} variants={fadeIn}>
                            <h2 className=' font-extrabold text-3xl text-[#EEEEEE]'>{index === 0 ? 'Individual therapy' : 'Couples therapy'}</h2>
                            <p className='mt-2 font-extrabold   text-[56px] text-[#FFFFFF]'>{index === 0 ? '$100' : '$120'}</p>
                            <Link
                                href='/booking'
                                className="mt-6 py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg text-white hover:underline">
                                Book a consultation
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-[60px] px-5 lg:px-10 w-full flex flex-col justify-center gap-4 mx-auto max-w-5xl">
                    <h1 className='text-[#131313] font-extrabold text-3xl'>Testimonials</h1>
                    <Carousel
                        setApi={setApi}
                        className="w-full lg:max-w-5xl">
                        <CarouselContent>
                            <CarouselItem>
                                <Card className='py-0'>
                                    <CardContent className="flex flex-col items-start justify-center p-4">
                                        <p className='text-sm lg:text-lg text-[#424242] '>“I was unsure about starting therapy, but Claudia was able to quickly put my mind at ease. She really helped me to explore and understand my problems in a kind and empathetic way. Claudia was caring and non-judgemental at a time when I really needed that in my life. I gained so much from her support and feel so much more able to handle life stress confidently and put myself first. Thank you, Claudia!”.</p>
                                        <h3 className='mt-[14px]  text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className='py-0'>
                                    <CardContent className="flex flex-col items-start justify-center p-4">
                                        <p className='text-sm lg:text-lg text-[#424242] '>“Working with Claudia has been life-changing. From our very first session, I felt truly seen and heard. She patiently helped me unpack years of self-doubt and stress, giving me the clarity I desperately needed. Her gentle approach and insightful guidance empowered me to heal and rebuild my confidence. I now approach life with a sense of calm and resilience I never thought possible. I&apos;m incredibly grateful for her support and encouragement.”</p>
                                        <h3 className='mt-[14px]  text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className='py-0'>
                                    <CardContent className="flex flex-col items-start justify-center p-4">
                                        <p className='text-sm lg:text-lg text-[#424242] '>“I was feeling completely overwhelmed by my anxiety, but Claudia&apos;s warmth and professionalism made all the difference. She provided a safe, welcoming space where I could talk openly without fear of judgment. Claudia helped me uncover patterns in my thinking and gave me practical tools to manage my emotions. Thanks to her guidance, I feel stronger, more grounded, and better equipped to face challenges. I can&apos;t thank her enough for helping me regain control over my life.”</p>
                                        <h3 className='mt-[14px]  text-xl font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="flex items-center justify-center mt-4 gap-2">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${index + 1 === current ? 'bg-[#C99D86]' : 'bg-[#C4C4C4]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section >

        </>
    )
}

export default Payment
