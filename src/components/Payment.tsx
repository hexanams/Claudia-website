"use client"
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const Payment = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <>
            <section
                className="px-5 h-[434px] md:px-[6.3rem] pb-14 bg-[url('/payment.svg')] w-full bg-cover bg-center bg-no-repeat flex items-end"
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h1 className='text-[#F2F2F2] text-xl md:text-5xl font-extrabold'>Book a Payment and Fees</h1>
                    <p className='text-xs text-white lg:text-lg font-light'>We believe that quality mental health care should be accessible and transparent. Below, you&apos;ll find information about our session fees, payment options, and insurance coverage. If you have any questions, please don&apos;t hesitate to reach out—we&apos;re happy to help.</p>
                </motion.div>
            </section>

            <section className='px-9 py-10 flex flex-col justify-center bg-[#EEECEB] items-center'>
                <motion.div className='w-full md:w-fit flex flex-col lg:flex-row justify-center gap-8 items-center' variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {['payment-1.svg', 'payment-2.svg'].map((src, index) => (
                        <motion.div key={index} className="w-full md:w-[559px] px-36 py-8 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/${src}')` }} variants={fadeIn}>
                            <h2 className='font-extrabold text-3xl text-[#EEEEEE]'>{index === 0 ? 'Individual therapy' : 'Couples therapy'}</h2>
                            <h1 className='mt-2 font-extrabold text-[56px] text-[#FFFFFF]'>{index === 0 ? '$100' : '$120'}</h1>
                            {index === 0 ? (
                                <Button
                                    variant="ghost"
                                    className="mt-6 py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg text-white">
                                    Book a consultation
                                </Button>
                            ) : (
                                <Link
                                    href='/booking'
                                    className="mt-6 py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg text-white">
                                    Book a consultation
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-[60px] px-5 lg:px-10 w-full flex flex-col justify-center gap-4 mx-auto max-w-5xl">
                    <h1 className='text-[#131313] font-extrabold text-3xl'>Testimonials</h1>
                    <Carousel setApi={setApi} className="w-full lg:max-w-5xl">
                        <CarouselContent>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Card className='py-0'>
                                        <CardContent className="flex flex-col items-start justify-center p-4">
                                            <p className='text-sm lg:text-base text-[#424242] '>Claudia has been incredibly supportive and caring throughout our therapy sessions. She has shown me a new way to manage my stress and maintain a positive mindset.</p>
                                            <h3 className='mt-[14px] text-xs font-extrabold text-[#131313]'>Anonymous Client - Former client</h3>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Slide {current} of {count}
                    </div>
                </div>
            </section >

        </>
    )
}

export default Payment
