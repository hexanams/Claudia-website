import Image from "next/image"


const Experiences = () => {
    return (
        <>
            <section className="px-16 py-20">
                <div className="py-12 px-36 flex flex-col gap-8 justify-center items-center ">
                    <div className="bg-[#EEECEB] py-2 px-4 rounded-3xl text-[#C7C2BE] text-base font-extrabold">A Journey From Struggle to Strength</div>
                    <div className="text-[#131313] text-xl text-center">
                        “I was unsure about starting therapy, but Claudia was able to quickly put my mind at ease. She really helped me to explore and understand my problems in a kind and empathetic way. Claudia was caring and non-judgemental at a time when I really needed that in my life. I gained so much from her support and feel so much more able to handle life stress confidently and put myself first. Thank you, Claudia!”
                    </div>
                    <div className="text-base flex justify-center items-center font-medium">
                        Anonymous- Current client
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">

                </div>
            </section>

            <section className="flex flex-col justify-center items-center">
                <div className="text-[#131313] font-extrabold text-2xl text-center px-[270px]">
                    We uphold rigorous quality standards and follow ethical guidelines set by trusted regulatory bodies to ensure the safety and well-being of all our clients.
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 pt-[3.7rem] pb-[4.9rem]">
                    <Image alt='organizations'
                        src='/pschology-today.svg'
                        width={362}
                        height={94}
                        priority
                    />
                    <Image alt='organizations'
                        src='/bacp.svg'
                        width={344}
                        height={104}
                        priority
                    />
                    <Image alt='organizations'
                        src='/british-psychology.svg'
                        width={234}
                        height={128}
                        priority
                    />
                </div>
            </section>

            <section className="px-16 py-20">
                <div className='p-10 flex gap-[38px] justify-center items-center'>
                    <div className='flex flex-col gap-8 w-1/2'>
                        <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Empathy</div>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-[#131313] font-extrabold text-[2.5rem] text-left'>
                                Your Journey to Mental Well-Being Starts Here
                            </h1>
                            <h3 className='text-[#616161] font-light text-lg text-left'>
                                Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                            </h3>
                        </div>
                        <button className="py-2 px-5 bg-[#C99D85] text-base w-fit rounded-lg">
                            Book an appointment
                        </button>
                    </div>

                    <div className='relative w-1/2 h-[640px]'>
                        <Image
                            alt='mental-health'
                            src='/mental-well-being.svg'
                            fill
                            objectFit="cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experiences