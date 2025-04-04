import Issues from '@/components/Issues'
import MidSection from '@/components/PageMidSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Empowered therapy - Issues i treat",
    description:
        "A list of issues and problems i'm certified to treat",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{
            url: "https://empoweredtherapy.com/logo.svg"
        }],
        title: "Empowered therapy - issues",
        description:
            "List of issues i treat",
    },
}
const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <Issues />
            </div>
            <MidSection />
        </section>)
}

export default Page