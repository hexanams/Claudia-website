"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const Experiences = () => {
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
            <section className="p-5 lg:px-16 lg:py-20">
                <motion.div
                    className="lg:py-12 lg:px-36 flex flex-col gap-4 lg:gap-8 justify-center items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="bg-[#EEECEB] py-2 px-4 rounded-3xl text-[#C7C2BE] text-base font-extrabold" variants={textVariants}>
                        A Journey From Struggle to Strength
                    </motion.div>
                    <motion.div className="text-[#131313] text-base lg:text-xl text-center" variants={textVariants}>
                        “I was unsure about starting therapy, but Claudia was able to quickly put my mind at ease. She really helped me to explore and understand my problems in a kind and empathetic way. Claudia was caring and non-judgemental at a time when I really needed that in my life. I gained so much from her support and feel so much more able to handle life stress confidently and put myself first. Thank you, Claudia!”
                    </motion.div>
                    <motion.div className="text-sm lg:text-base font-medium" variants={textVariants}>
                        Anonymous - Current client
                    </motion.div>
                </motion.div>
            </section>

            <section className="flex flex-col justify-center items-center">
                <motion.div
                    className="text-[#131313] font-extrabold text-2xl text-center px-5 lg:px-[270px]"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    We uphold rigorous quality standards and follow ethical guidelines set by trusted regulatory bodies to ensure the safety and well-being of all our clients.
                </motion.div>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-6 pt-[3.7rem] pb-[4.9rem]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {['/pschology-today.svg', '/bacp.svg', '/british-psychology.svg'].map((src, index) => (
                        <motion.div key={index} variants={imageVariants}>
                            <Image alt='organizations' src={src} width={index === 2 ? 234 : 362} height={index === 2 ? 128 : 94} priority />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="p-5 lg:px-16 lg:py-20">
                <div className="lg:p-10 flex flex-col lg:flex-row gap-[38px] justify-between items-center">
                    <motion.div
                        className="flex flex-col items-center lg:items-start gap-8 lg:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit" variants={textVariants}>
                            Empathy
                        </motion.div>
                        <motion.div className="flex flex-col gap-6" variants={textVariants}>
                            <h1 className="text-[#131313] font-extrabold text-xl lg:text-[2.5rem] text-left">
                                Your Journey to Mental Well-Being Starts Here
                            </h1>
                            <h3 className="text-[#616161] font-light text-base lg:text-lg text-left">
                                Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                            </h3>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <Link
                                href='/booking'
                                className="py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg text-white hover:bg-[#b48470] transition-colors"
                            >
                                Book an appointment
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center items-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Image
                            alt='mental-health'
                            src='/mental-well-being.svg'
                            width={616}
                            height={640}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Experiences