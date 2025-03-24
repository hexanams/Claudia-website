"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"

const Steps = () => {
    const steps = [
        {
            title: 'Individual therapy',
            description: 'One-on-one counseling designed to support personal growth, emotional healing, and mental well-being.',
            image: '/individual-therapy.svg'
        },
        {
            title: 'Child and Adolescent Therapy',
            description: 'Tailored therapy for children and teenagers, focusing on emotional development, behavioral issues, and mental health challenges.',
            image: '/child-therapy.svg'
        },
        {
            title: 'Couples Therapy',
            description: 'Therapy for couples to improve communication, resolve conflicts, and strengthen their relationship.',
            image: '/couples-therapy.svg'
        },
        {
            title: 'Workplace Therapy',
            description: 'Support for individuals in a work environment to manage stress, improve productivity, and address workplace-related issues.',
            image: '/workplace-therapy.svg'
        },
        {
            title: 'Adult Therapy',
            description: 'Counseling for adults to manage life transitions, anxiety, depression, and personal challenges.',
            image: '/adult-therapy.svg'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
    return (
        <>
            <section className="p-5 lg:px-16 lg:py-20 bg-[url('/first-steps.svg')] w-full bg-cover bg-center bg-no-repeat">
                <motion.div
                    className="flex flex-col gap-6 justify-center items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className='font-canela font-extrabold text-xl lg:text-5xl text-center' variants={textVariants}>
                        Take the First Step Today
                    </motion.div>
                    <motion.p className='text-base lg:text-lg text-[#131313] font-light text-center' variants={textVariants}>
                        Your journey to mental well-being starts here. Reach out now to schedule your appointment or learn more about our services.
                    </motion.p>
                    <motion.div
                        className="bg-[#C99D85] text-base w-fit rounded-lg text-white hover:bg-[#b48470] transition-colors"
                        variants={textVariants}>
                        <Link className="py-2 px-5 h-[56px] flex items-center" href='/booking'>
                            Book an appointment
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <section className="p-5 lg:py-20 lg:px-16 flex flex-col gap-20">
                <motion.div
                    className="flex flex-col justify-center items-center gap-4 h-fit"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit font-sweet-sans' variants={textVariants}>
                        Our Services
                    </motion.div>
                    <motion.div className="font-extrabold font-canela text-xl lg:text-5xl text-center text-wrap" variants={textVariants}>
                        We provide a safe, non-judgmental space where you can express yourself
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-wrap flex-row gap-12 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {steps.map((step, i) => (
                        <motion.div key={i} variants={imageVariants} className="rounded-[8px] shadow-sm w-full h-[500px] sm:w-[405px] sm:h-[568px]">
                            <div className="w-fit h-[250px] rounded-lg">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={405}
                                    height={248}
                                />
                            </div>
                            <div className="px-6 mt-6 flex flex-col gap-4 ">
                                <div className="text-xl font-canela lg:text-3xl  font-extrabold text-[#939393]">{step.title}</div>
                                <p className="font-light text-[#939393] text-base lg:text-xl">{step.description}</p>
                            </div>

                            <div
                                className="px-6 flex items-center gap-1 mt-4 text-[#C7C2BE] hover:underline cursor-pointer text-base lg:text-xl font-light"
                            >
                                <Link href="/booking">
                                    Book a consultation
                                </Link>
                                <ChevronRight />
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    )
}

export default Steps