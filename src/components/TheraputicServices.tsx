"use client"
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
export const services = [
    {
        id: 1,
        title: "Individual therapy",
        description: (
            <div className='mt-6 flex flex-col gap-4 text-sm md:text-base text-[#939393] font-light'>
                <p>
                    One-to-one talk therapy can offer you a safe space to help you navigate any difficulties you are experiencing and work through them in a supportive environment. Therapy can also be a space to offload and navigate life’s challenges.
                </p>

                <p>
                    When it comes to psychological therapy for adults there is no one-size-fits-all. We all work in different ways and seek psychological support for our own unique reasons, which is why we provide an environment where we can develop tailored treatment approaches that meet your individual therapeutic needs and goals.
                </p>

                <p>
                    Whether this is your first time seeking therapy or you are returning to therapy our tailor-made approach to therapy will ensure we meet your needs.
                </p>
                <p>
                    We draw upon numerous psychological models including Person-Centred, Psychodynamic / Psychoanalytical therapy, Intensive Short Term Dynamic Therapy, Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT)and more in order to find the right approach for your needs.

                </p>
            </div>
        ),
        image: "/indivi-therapy.svg",
    },
    {
        id: 3,
        title: "Child and adolescent",
        description: (
            <div className='mt-6 flex flex-col gap-4 text-sm md:text-base text-[#939393] font-light'>
                <p>Child and adolescent therapy offers a safe space for children to express and make sense of challenging thoughts, feelings and behaviours
                </p>
                <p>The psychological and emotional health of children and adolescents is crucial for health development as an adult. Their ability to bounce back from setbacks and mature into well-adjusted, healthy adults is facilitated by having good mental health from a young age.
                </p>
                <div>
                    <p>We offer support to children and adolescents for a wide-range of difficulties including:
                    </p>
                    <ul>
                        <li>Low Mood</li>
                        <li>Anxiety and Panic</li>
                        <li>Bullying</li>
                        <li>Stress</li>
                        <li>Behavioural difficulties</li>
                        <li>Difficulties relating to Attention Deficit Hyperactivity Disorder (ADHD)
                        </li>
                        <li>Difficulties relating to Autism Spectrum Disorder </li>
                        <li>Family and relationship difficulties</li>
                        <li>	Navigating developmental stages
                        </li>
                        <li>Eating disorders
                        </li>
                    </ul>
                </div>
            </div>
        ),
        image: "/therapy-2.svg",

    },
    {
        id: 4,
        title: "Couples therapy",
        description: (
            <div className='mt-6 flex flex-col gap-4 text-sm md:text-base text-[#939393] font-light'>
                <p>We recognise that every individual is different and has their own individual experience that leads them to seek psychological therapy and couples therapy is no different.
                </p>

                <p>
                    There are many reasons why couples choose to seek couples therapy, for example partners may notice unhelpful, repeating behaviour patterns which find them stuck in the same argument over and over again, some problems within relationships may arise due to lack of trust, intimacy or communication. There may also be external factors placing stress on the relationship such as financial problems or work stressors. When any of these problems arise within a relationship, couples therapy can help you to communicate more effectively and form a deeper understanding of one another.
                </p>

                <p>
                    I believe that couples therapy isn&apos;t just needed for when things are going wrong. In fact, seeking therapy during times when things are going well can be incredibly beneficial for strengthening the relationship and building a deeper connection. It&apos;s a proactive way to deepen communication, resolve any lingering issues before they escalate, and learn new tools for maintaining a healthy and supportive relationship. Therapy can help couples stay aligned with each other, navigate challenges that arise, and even improve intimacy and trust. I see it as a space to explore not only when there is difficulties but also a space to ensure you remain on a healthy path in your relationship as relationships take efforts, commitment and people evolve overtime which can create a disconnect.
                </p>

                <p>
                    We work with all types of relationships; married couples, straight, LGBTQI+, polyamorous relationships, families, work and group relationships
                </p>
            </div>
        ),
        image: "/therapy-3.svg",
    },
    {
        id: 5,
        title: "Workplace therapy",
        description: (
            <div className='mt-6 flex flex-col gap-4 text-sm md:text-base text-[#939393] font-light'>

                <p>We want to make accessing psychological support for staff within companies as easy as possible. Therefore, we provide a &apos;pay as you go&apos; approach for businesses so you only pay for the therapy your staff need. We are happy to tailor our approach as best as possible to ensure we meet your companies needs and your staff&apos;s needs.</p>
            </div>
        ),
        image: "/therapy-4.svg",
    },
    {
        id: 6,
        title: "Psychology career coaching",
        description: (
            <div className='mt-6 flex flex-col gap-4 text-sm md:text-base text-[#939393] font-light'>
                <p>We recognise the lack of career advice & resources that are available for aspiring psychologists and psychotherapists, therefore, we are proud to offer this specialist service  at empoweredtherapy.com to support Psychology students and graduates.
                </p>

                <p>
                    Coaching sessions will be held via video call and will give you the opportunity to have one to one time that will support and guidance for your career in psychology, whether that is support getting onto a professional doctorate programme, advice for career options in psychology or how to get clinical experience during your studies. We also offer proof reading services for psychology doctorate applications and personal statements.

                </p>

                <p>
                    Please note career coaching sessions are tailored to supporting psychology, counselling and psychotherapy careers only and are not a substitute for a therapy session.
                </p>

                <p>
                    Sessions are 50 minutes and are tailored to meet your individual needs.
                </p>
            </div>
        ),
        image: "/therapy-5.svg",
    }
];
const TheraputicServices = () => {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='bg-[#EEECEB]'>
            <div className='text-xl font-canela text-[#939393] md:text-5xl font-extrabold mt-10 text-center'>Therapeutic services we offer</div>
            <div className='flex'>
                <section className="mt-9 flex flex-col lg:flex-row gap-10 p-5 lg:px-20">

                    {/* Service List */}
                    <div className="w-full lg:w-1/3 bg-[#EFE9E3] p-5 md:pl-[100px] md:pt-[68px] flex flex-col gap-2 md:gap-5">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`cursor-pointer text-[#939393] font-medium text-base md:text-lg ${selectedService.id === service.id ? "text-[#C99D86]" : ""}`}
                                onClick={() => setSelectedService(service)}
                            >
                                {service.title}
                            </div>
                        ))}
                        <div>
                            {/* Trigger */}
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-3 py-2 lg:py-5 text-base lg:text-lg font-medium text-[#C99D86] cursor-pointer"
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight className='text-[#C99D86]' />
                                </motion.div>
                                TREATMENT METHODS
                            </div>

                            {/* Content */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 flex flex-col gap-8 mt-4">
                                            <p>Cognitive Analytic therapy</p>
                                            <p>Cognitive Behaviour Therapy</p>
                                            <p>Existential therapy</p>
                                            <p>Humanistic therapy</p>
                                            <p>Interpersonal therapy</p>
                                            <p>Intensive short term dynamic therapy</p>
                                            <p>Psychodynamic therapy</p>
                                            <p>Narrative therapy</p>
                                            <p>Solution focused therapy</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Displayed Service */}
                    <div className="w-full lg:w-2/3 p-6 flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col items-start"
                            >
                                <Image
                                    src={selectedService.image || ""}
                                    alt={selectedService.title}
                                    width={913}
                                    height={200}
                                    className="rounded-lg"
                                />

                                <div className="mt-10 font-canela text-2xl md:text-[40px] text-[#939393] font-extrabold">
                                    {selectedService.title}
                                </div>

                                <div className="mt-4 text-gray text-base space-y-4 text-[#939393]">
                                    {selectedService.description}
                                </div>

                                <Link
                                    href='/booking'
                                    className="mt-8 py-2 px-5 h-14 rounded-[8px] flex items-center bg-[#C99D85] text-base w-fit text-white"
                                >
                                    Book a consultation
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </section>

    )
}

export default TheraputicServices