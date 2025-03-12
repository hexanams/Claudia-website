"use client"
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'

const FAQ = () => {
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
        <>
            <section className="p-5 lg:py-20 lg:px-[12.5rem] flex flex-col items-center gap-10 lg:gap-20">
                <div className="w-fit flex flex-col justify-center items-center gap-6">
                    <h1 className="text-3xl font-extrabold">FAQs</h1>
                    <h3 className="text-lg font-light text-center">Find answers to common questions about our services and how we can support you.</h3>
                </div>

                <div className="bg-[#EEECEB] w-full">
                    <Accordion type="multiple" className='px-5 lg:px-20 py-5'>
                        {questions.map((question, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className='py-2 lg:py-5 text-base lg:text-lg font-extrabold'>{question.question}</AccordionTrigger>
                                <AccordionContent className='pb-6'>
                                    {question.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>

                <div className="w-full lg:w-[560px] flex flex-col justify-center items-center">
                    <h1 className="text-xl lg:text-3xl font-extrabold">Still have questions?</h1>
                    <h3 className="my-2 lg:mt-4 lg:mb-6 text-base lg:text-lg font-light">We&apos;re here to help you!</h3>
                    <Link
                        href='/contact'
                        className="py-2 px-5 bg-[#C99D86] text-white rounded-md">
                        Contact
                    </Link>
                </div>
            </section>

            <section className='p-5 lg:px-16 lg:py-20 flex flex-col gap-10 lg:gap-20'>
                <div className="flex flex-col items-center gap-6">
                    <h1 className="font-extrabold text-2xl lg:text-5xl">Image Gallery</h1>
                    <h1 className="font-light text-base lg:text-lg">Explore our inviting therapy spaces and events.</h1>
                </div>
                <div className='md:hidden flex justify-center'>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-xs"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className='w-screen'>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="pl-1 ">
                                    <Image
                                        alt='image gallery'
                                        src={image}
                                        width={416}
                                        height={416}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5">
                    {images.map((image, i) => (
                        <Image
                            key={i}
                            alt='image gallery'
                            src={image}
                            width={416}
                            height={416}
                        />
                    ))}

                </div>

            </section>
        </>
    )
}

export default FAQ