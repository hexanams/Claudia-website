import React from 'react'
import Image from "next/image"
import { Mail, Phone } from 'lucide-react'

const Booking = () => {
    return (
        <>
            <section className='w-full h-[434px] px-5 pb-14 lg:px-[6.3rem] flex items-end'>
                <div>
                    <h1 className='text-[#F2F2F2] text-xl lg:text-5xl font-extrabold'>Book a Consultation Online</h1>
                    <p className='text-xs lg:text-lg font-light'>Taking the first step toward therapy is a sign of strength, and we&apos;re here to make it as easy as possible. Schedule your consultation online at a time that works for you. Whether you have questions about our services or are ready to begin your journey, we&apos;re here to support you.</p>
                </div>
            </section>
            <section className='bg-[#EEECEB] flex flex-col justify-center items-center py-10 lg:py-40'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='font-extrabold text-xl lg:text-3xl'>Free 15 minutes consultation call</h1>
                    <h2 className='text-base'>Conducted via Phone or Video Call with me</h2>
                </div>


                <div className='mt-10 lg:mt-20 flex flex-col lg:flex-row items-center gap-8 justify-between'>
                    <div className="relative lg:w-fit h-fit">
                        <div className="hidden xl:inline w-[380px] h-[457px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
                        <Image
                            className="relative lg:z-10 z-0"
                            alt="image gallery"
                            src="/Claudia.svg"
                            width={380}
                            height={457}
                            fetchPriority="high"
                            priority
                        />
                    </div>

                    <div className='flex flex-col gap-6 items-center'>
                        <div className='bg-white py-8 px-10 flex flex-col gap-4 lg:gap-8'>
                            <div className='flex gap-3.5 items-center'>
                                <Phone className='text-black size-4' />
                                <h4 className='text-sm lg:text-base'>+29000000000</h4>
                            </div>
                            <div className='flex gap-3.5 items-center'>
                                <Mail className='text-black size-4' />
                                <h4 className='text-sm lg:text-base'>claudia@empoweredtherapy.com</h4>
                            </div>
                        </div>

                        <button className='bg-[#C99D86] py-2 px-5 text-white rounded-sm'>
                            Book an appointment
                        </button>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Booking