import MidSection from '@/components/PageMidSection'
import Payment from '@/components/Payment'
import React from 'react'

const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <Payment />
            </div>
            <MidSection />
        </section>
    )
}

export default Page