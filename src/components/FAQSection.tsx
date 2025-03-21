"use client"
import { motion } from 'motion/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'


const FAQSection = () => {
    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

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
            <section className="px-5 h-[350px] lg:h-[434px] lg:px-[6.3rem] pb-14 bg-[url('/faq-hero.svg')] w-full bg-cover bg-center bg-no-repeat flex items-end">
                <motion.div
                    variants={fadeIn("up", 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className='text-[#F2F2F2] font-canela text-xl lg:text-5xl font-extrabold '>FAQs</div>
                    <p className='text-xs text-white lg:text-lg font-light mt-3'>Have questions about therapy? We&apos;re here to help. Below are answers to some of the most common questions about our services, what to expect, and how therapy can support you on your journey to healing and growth. If you don&apos;t see your question here, feel free to reach out—we&apos;re happy to assist.</p>
                </motion.div>
            </section >

            <motion.div
                className="bg-[#EEECEB] p-5 lg:py-28 lg:px-[12.5rem] w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn("up", 0)}
            >
                <motion.div
                    className='font-canela text-[#939393] font-extrabold text-2xl lg:text-5xl text-center'
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Frequently Asked Questions
                </motion.div>

                <motion.div
                    className='bg-white px-5 lg:px-20 py-5 mt-10 rounded-2xl'
                    variants={fadeIn("up", 0.2)}
                >
                    <Accordion type="multiple">
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
                                    <AccordionTrigger className='py-2 lg:py-5 text-base lg:text-lg font-extrabold'>
                                        {question.question}
                                    </AccordionTrigger>
                                    <AccordionContent className='pb-6'>
                                        {question.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </motion.div>
        </>
    )
}

export default FAQSection