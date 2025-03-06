import React from 'react'


const Hero = () => {
    return (
        <div className='relative flex-grow flex flex-col justify-center items-center h-full px-[9.3rem]'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs"
            >
                <source src="/claudia-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className='text-[2.5rem] text-white font-extrabold text-center mx-[11.3rem]'>You deserve a life of empowerment and fulfilment.</h1>
            <h1 className='text-[2.5rem] text-white font-extrabold text-center mx-[11.3rem]'>  I am committed to helping you find it.
            </h1>
            <p className='text-center text-lg mt-6 font-light text-white'>
                Therapy is not a linear process. It’s filled with ups and downs, progress and setbacks, and moments of clarity mixed with times of confusion. People can have mixed feelings about how they see therapy but going to therapy doesn’t mean something is wrong with you; it means you’re taking steps to become the best version of yourself.
                At empoweredtherapy.com we believe that the best investment you can make is in yourself.  A healthy relationship with yourself is the foundation for a healthy relationship with others.
                You have to be in your mind 24/7 let’s make it a nice place to be. I am committed to helping you get there.
            </p>
            <div className='mt-8 flex gap-4 '>
                <button className='py-3 px-6 bg-[#C99D86] text-white text-base rounded'>
                    Learn More
                </button>
                <button className='py-3 px-6 text-[#C7C2BE] bg-[#F9F9F9] text-base rounded'>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Hero