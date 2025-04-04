import FAQSection from '@/components/FAQSection'
import MidSection from '@/components/PageMidSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Empowered therapy - FAQs about empowered therapy",
    description:
        "Frequently asked questions about empowered therapy",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{
            url: "https://empoweredtherapy.com/logo.svg"
        }],
        title: "Empowered therapy - FAQs",
        description:
            "Frequently asked questions about empowered therapy",
    },
}

const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <FAQSection />
            </div>
            <MidSection />
        </section>
    )
}

export default Page