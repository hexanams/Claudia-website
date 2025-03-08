import Booking from '@/components/Booking'
import MidSection from '@/components/PageMidSection'
import React from 'react'


const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <Booking />
            </div>
            <MidSection />
        </section>)
}

export default Page