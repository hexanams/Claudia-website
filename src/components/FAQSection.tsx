import React from 'react'
import MidSection from './PageMidSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'


const FAQSection = () => {
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

    return (
        <>
            <section className='w-full h-[434px] px-5 pb-14 lg:px-[6.3rem] flex items-end'>
                <div>
                    <h1 className='text-[#F2F2F2] text-xl lg:text-5xl font-extrabold'>FAQs</h1>
                    <p className='text-xs lg:text-lg font-light'>Have questions about therapy? We&apos;re here to help. Below are answers to some of the most common questions about our services, what to expect, and how therapy can support you on your journey to healing and growth. If you don&apos;t see your question here, feel free to reach out—we&apos;re happy to assist.</p>
                </div>
            </section>

            <div className="bg-[#EEECEB] p-5 lg:py-28 lg:px-[12.5rem] w-full">
                <h1 className='font-extrabold text-2xl lg:text-5xl text-center'>Frequently Asked Questions</h1>
                <Accordion type="multiple" className='bg-white px-5 lg:px-20 py-5 mt-10'>
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

            <MidSection />
        </>
    )
}

export default FAQSection