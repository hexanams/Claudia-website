"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"

const MidSection = () => {

    const images = ['image-gallery-1.svg', '/image-gallery-2.svg', '/image-gallery-3.svg']

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <>
            <section className="flex flex-col justify-center items-center py-10 gap-10">
                <div className="text-[#131313] font-extrabold text-2xl text-center px-5 lg:px-[270px]">
                    We uphold rigorous quality standards and follow ethical guidelines set by trusted regulatory bodies to ensure the safety and well-being of all our clients.
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <Image alt='organizations'
                        src='/pschology-today.svg'
                        width={181}
                        height={47}
                        priority
                    />
                    <Image alt='organizations'
                        src='/bacp.svg'
                        width={172}
                        height={52}
                        priority
                    />
                    <Image alt='organizations'
                        src='/hpcp.svg'
                        width={91}
                        height={93}
                        priority
                    />
                    <Image alt='organizations'
                        src='/british-psychology.svg'
                        width={117}
                        height={64}
                        priority
                    />
                </div>
            </section>

            <section className="p-5 lg:px-16 lg:py-20 bg-[url('/first-steps.svg')] w-full bg-cover bg-center bg-no-repeat">
                <div
                    className="flex flex-col gap-6 justify-center items-center"
                >
                    <h1 className='font-extrabold text-xl lg:text-5xl text-center'>Take the First Step Today</h1>
                    <p className='text-base lg:text-lg text-[#131313] font-light text-center'>Your journey to mental well-being starts here. Reach out now to schedule your appointment or learn more about our services.</p>
                    <button className="py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg">
                        Book an appointment
                    </button>
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

export default MidSection