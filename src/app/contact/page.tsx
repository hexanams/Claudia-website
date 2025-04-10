import Contact from '@/components/Contact'
import MidSection from '@/components/PageMidSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Empowered therapy - Contact",
    description:
        "Have any questions? reach out to me",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{
            url: "https://empoweredtherapy.com/fav-icon.png"
        }],
        title: "Empowered therapy - contact",
        description:
            "Reach out to me for any questions you may have",
    },
}

const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <Contact />
            </div>
            <MidSection />
        </section>
    )
}

export default Page