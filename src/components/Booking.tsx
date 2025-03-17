"use client"
import { Button } from "@/components/ui/button"
import { DialogClose } from "@radix-ui/react-dialog"
import { Mail, Phone, X } from 'lucide-react'
import Image from "next/image"
import { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Link from "next/link"
import { motion } from "motion/react"


const Booking = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    }

    // Set up Calendly event listener
    useEffect(() => {
        // Function to handle Calendly events
        interface CalendlyEventPayload {
            event: {
                start_time: string;
            };
        }

        interface CalendlyEvent {
            event: string;
            payload: CalendlyEventPayload;
        }

        const handleCalendlyEvent = (e: MessageEvent<CalendlyEvent>) => {
            if (e.data.event && e.data.event === 'calendly.event_scheduled') {
                const eventDetails = e.data;
                if (eventDetails && eventDetails.payload) {

                    localStorage.setItem('calendlyEventData', JSON.stringify(eventDetails.payload));
                }
            }
        };

        window.addEventListener('message', handleCalendlyEvent);

        return () => {
            window.removeEventListener('message', handleCalendlyEvent);
        };
    }, []);

    return (
        <>
            <section
                className="px-5 h-[350px] lg:h-[434px] md:px-[6.3rem] pb-14 bg-[url('/booking-hero.svg')] w-full bg-cover bg-center bg-no-repeat flex items-end"
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Link
                        href={'/booking'}
                        className='text-[#F2F2F2] text-xl md:text-5xl font-extrabold'>Book a Consultation Online</Link>
                    <p className='text-xs text-white lg:text-lg font-light'>Taking the first step toward therapy is a sign of strength, and we&apos;re here to make it as easy as possible. Schedule your consultation online at a time that works for you. Whether you have questions about our services or are ready to begin your journey, we&apos;re here to support you.</p>
                </motion.div>
            </section>

            <motion.section
                className='bg-[#EEECEB] flex flex-col justify-center items-center py-10 md:py-40'
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className='text-center flex flex-col gap-2' variants={fadeIn}>
                    <h1 className='font-extrabold font-avenir text-xl md:text-3xl'>Free 15 minutes consultation call</h1>
                    <h2 className='text-base font-avenir'>Conducted via Phone or Video Call with me</h2>
                </motion.div>

                <motion.div className='mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-8 justify-between' variants={fadeIn}>
                    <div className="relative md:w-fit h-fit">
                        <div className="hidden xl:inline w-[380px] h-[457px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
                        <Image
                            className="relative md:z-10 z-0"
                            alt="image gallery"
                            src="/Claudia.svg"
                            width={380}
                            height={457}
                            fetchPriority="high"
                            priority
                        />
                    </div>

                    <div className='flex flex-col gap-6 items-center'>
                        <div className='bg-white py-8 px-10 flex flex-col gap-4 md:gap-8'>
                            <div className='flex gap-3.5 items-center'>
                                <Phone className='text-black size-4' />
                                <h4 className='font-avenir text-sm md:text-base'>+29000000000</h4>
                            </div>
                            <div className='flex gap-3.5 items-center'>
                                <Mail className='text-black size-4' />
                                <h4 className='font-avenir text-sm md:text-base'>claudia@empoweredtherapy.com</h4>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className='bg-[#C99D86] py-2 px-5 rounded-sm text-[#EFE9E3] text-base'>
                                    Book an appointment
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="overflow-auto h-[95%] min-w-full md:min-w-3xl lg:min-w-6xl md:px-12 py-20 lg:px-32 flex flex-col items-center">
                                <DialogHeader>
                                    <DialogTitle className='flex justify-between'>
                                        <div />
                                        <div className="text-sm font-avenir md:text-3xl font-extrabold text-center">FREE 15 Minute Consultation Call</div>
                                        <DialogClose><X /></DialogClose>
                                    </DialogTitle>
                                    <DialogDescription className='text-xs md:text-base text-center font-light text-[#666666]'>
                                        Not sure if therapy is the right fit for you? We&apos;re here to help! Schedule a free 15-minute consultation call to discuss your needs, ask questions, and learn more about how we can support you. This no-obligation call is a great opportunity to get to know us and decide how we can best work together on your path to healing.
                                    </DialogDescription>
                                </DialogHeader>
                                <CalendlyTab />

                            </DialogContent>
                        </Dialog>
                    </div>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Booking

const CalendlyTab = () => {
    return (
        <div className='w-full max-w-4xl'>
            <InlineWidget
                url={process.env.NEXT_PUBLIC_CALENDLY_URL!}
                styles={{
                    height: '600px',
                    width: '100%',
                }}
            />
        </div>
    )
}
