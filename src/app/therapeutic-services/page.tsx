import MidSection from '@/components/PageMidSection'
import TheraputicServices from '@/components/TheraputicServices'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Empowered therapy - Therapeutic services i provide",
    description:
        "Therapeutic services i provide",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{ url: "/logo.svg" }],
        title: "Empowered therapy - therapeutic services",
        description:
            "Therapeutic services i provide",
    },
}
const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <TheraputicServices />
            </div>
            <MidSection />
        </section>
    )
}

export default Page