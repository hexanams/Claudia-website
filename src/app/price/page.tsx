import MidSection from '@/components/PageMidSection'
import Payment from '@/components/Payment'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Empowered therapy - Pricing plans for you",
    description:
        "Get familiar with my pricing options for your needs",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{
            url: "https://empoweredtherapy.com/fav-icon.png"
        }],
        title: "Empowered therapy - pricing",
        description:
            "Pricing options for your needs",
    },
}

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