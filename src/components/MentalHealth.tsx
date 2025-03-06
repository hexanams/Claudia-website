import Image from 'next/image'

const MentalHealth = () => {
    return (
        <section className='px-20 py-[6.3rem]'>
            <div className='p-10 flex gap-[38px] justify-center'>
                <div className='flex flex-col gap-8 '>
                    <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Thrive</div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[#131313] font-extrabold text-[2.5rem] text-left'>
                            Your Journey to Mental Well-Being Starts Here
                        </h1>
                        <h3 className='text-[#616161] font-light text-lg text-left'>
                            Discover a holistic approach to mental health that prioritizes your unique needs. Our practice fosters a supportive environment where you can thrive, you can feel seen, heard and understood.
                        </h3>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-[1.3rem]'>Personalized Care</h2>
                            <p className='text-[#616161] text-base font-light text-left'>
                                Experience tailored strategies that empower you to overcome challenges and achieve balance.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-[#131313] font-extrabold text-[1.3rem]'>Personalized Care</h2>
                            <p className='text-[#616161] text-base font-light text-left'>
                                Experience tailored strategies that empower you to overcome challenges and achieve balance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-auto'>
                    <Image
                        alt='mental-health'
                        src='/mental-health.svg'
                        fill
                    />
                </div>
            </div>
        </section>
    )
}

export default MentalHealth