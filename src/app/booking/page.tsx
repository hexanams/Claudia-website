import Booking from '@/components/Booking'
import MidSection from '@/components/PageMidSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Empowered therapy - Booking",
    description:
        "book an online appointment with me so i can get you the help you need ",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{ url: "/logo.svg" }],
        title: "Empowered therapy - booking",
        description:
            "Book an online appointment",
    },
}

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