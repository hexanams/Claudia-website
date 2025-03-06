import Image from "next/image"


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

    return (
        <>
            <section className='p-5 lg:px-16 lg:py-20  bg-'>
                <div className='flex flex-col gap-6 justify-center items-center '>
                    <h1 className='font-extrabold text-xl lg:text-5xl text-center'>Take the First Step Today</h1>
                    <p className='text-base lg:text-lg text-[#131313] font-light text-center'>Your journey to mental well-being starts here. Reach out now to schedule your appointment or learn more about our services.</p>
                    <button className="py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg">
                        Book an appointment
                    </button>
                </div>
            </section>

            <section className="p-5 lg:py-20 lg:px-16 flex flex-col gap-20">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Our Services</div>
                    <div className="font-extrabold text-xl lg:text-5xl text-center">
                        We provide a safe, non-judgmental space where you can express yourself
                    </div>
                </div>

                <div className="grid grid-col-1 lg:grid-cols-3 gap-12 place-content-center">
                    {steps.map((step, i) => (
                        <div key={i}>
                            <div className="relative w-full h-[250px] rounded-lg">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    objectFit="cover"
                                />
                            </div>

                            <div className="px-6 mt-6 mb-4">
                                <h2 className="text-xl lg:text-3xl font-extrabold">{step.title}</h2>
                                <p className="font-light text-base lg:text-xl">{step.description}</p>
                                <h3 className="text-[#C7C2BE] hover:underline cursor-pointer text-base lg:text-xl font-light">Book a consultation</h3>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Steps