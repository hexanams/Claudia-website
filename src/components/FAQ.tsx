import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const FAQ = () => {
    return (
        <>
            <section className="py-20 px-[12.5rem] flex flex-col items-center gap-20">
                <div className="w-fit flex flex-col justify-center items-center gap-6">
                    <h1 className="text-3xl font-extrabold">FAQs</h1>
                    <h3 className="text-lg font-light text-center">Find answers to common questions about our services and how we can support you.</h3>
                </div>

                <div className="bg-[#EEECEB] pt-5 px-20 w-full">
                    <Accordion type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='py-5 text-lg font-extrabold'>What happens after your initial enquiry? </AccordionTrigger>
                            <AccordionContent className='pb-6'>
                                Following your initial enquiry with us, we will arrange an initial 15 minute consultation call with me to find our more about your enquiry, needs and therapeutic goals. If you are happy to proceed we will then arrange your first full appointment.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='py-5 text-lg font-extrabold'>How long would the sessions be?</AccordionTrigger>
                            <AccordionContent className='pb-6'>
                                Psychological therapy sessions are 50 minutes in duration, this is standard practice. Weekly attendance is required in order for you to fully benefit from therapy as it provides structure and consistency to the therapeutic work.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='py-5 text-lg font-extrabold'>How much are your fees?</AccordionTrigger>
                            <AccordionContent className='pb-6'>
                                You can view our prices page here. If you have further questions regarding prices please do not hesitate to contact us.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='py-5 text-lg font-extrabold'>How do I pay?</AccordionTrigger>
                            <AccordionContent className='pb-6'>
                                Payments can be made at the end of each session or I can invoice you on a monthly basis.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className='py-5 text-lg font-extrabold'>What is the cancelation policy?</AccordionTrigger>
                            <AccordionContent className='pb-6'>
                                We will always try our best to accommodate your needs should you need to reschedule or cancel your appointment, however late cancellations and missed appointments are payable in full unless 48 hours notice is given or an exceptional circumstance has arisen.                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>

                <div className="w-[560px] flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-extrabold">Still have questions?</h1>
                    <h3 className="mt-4 mb-6 text-lg font-light">We&apos;re here to help you!</h3>
                    <button className="py-2 px-5 bg-[#C99D86] text-white rounded-md">
                        Contact
                    </button>
                </div>
            </section>

            <section className='px-16 py-20 flex flex-col gap-20'>
                <div className="flex flex-col items-center gap-6">
                    <h1 className="font-extrabold text-5xl">Image Gallery</h1>
                    <h1 className="font-light text-lg">Explore our inviting therapy spaces and events.</h1>
                </div>

                <div className="grid grid-cols-3 place-items-center">
                    <Image
                        alt='image gallery'
                        src='/image-gallery-1.svg'
                        width={416}
                        height={416}
                    />
                    <Image
                        alt='image gallery'
                        src='/image-gallery-2.svg'
                        width={416}
                        height={416}
                    />
                    <Image
                        alt='image gallery'
                        src='/image-gallery-3.svg'
                        width={416}
                        height={416}
                    />
                </div>

            </section>
        </>
    )
}

export default FAQ