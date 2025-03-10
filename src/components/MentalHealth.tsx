import Image from 'next/image'

const MentalHealth = () => {
    return (
        <section className='lg:px-20 lg:py-[6.3rem]'>
            <div className='p-5 lg:p-10 flex flex-col lg:flex-row gap-[38px] justify-center'>
                <div className='flex flex-col items-center lg:items-start gap-8 w-full lg:w-1/2'>
                    <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Thrive</div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[#131313] font-extrabold text-xl lg:text-[2.5rem] text-left'>
                            Your Journey to Mental Well-Being Starts Here
                        </h1>
                        <h3 className='text-[#616161] font-light text-base lg:text-lg text-left'>
                            Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                        </h3>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-base lg:text-[1.3rem]'>Personalized Care</h2>
                            <p className='text-[#616161] text-sm lg:text-base font-light text-left'>
                                Experience tailored strategies that empower you to overcome challenges and achieve balance.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-base lg:text-[1.3rem]'>Compassionate Support</h2>
                            <p className='text-[#616161] text-sm lg:text-base font-light text-left'>
                                Our empathetic approach ensures you feel heard, valued, and understood throughout your journey.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <Image
                        alt='mental-health'
                        src='/mental-health.svg'
                        width={557}
                        height={474}
                    />
                </div>

            </div>
        </section>
    )
}

export default MentalHealth