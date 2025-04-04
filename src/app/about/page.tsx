import About from "@/components/About"
import MidSection from "@/components/PageMidSection"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About me",
    description:
        "get to know who i am",
    keywords: "Therapeutic services, therapy, mental health, counseling, psychotherapy",
    authors: [{ name: "Empowered therapy" }],
    creator: "Empowered therapy",
    openGraph: {
        images: [{ url: "/logo.svg" }],
        title: "Empowered therapy - about me",
        description:
            "Get to know about me",
    },
}

const Page = () => {
    return (
        <section>
            <div className="lg:min-h-screen flex flex-col">
                <About />
            </div>
            <MidSection />
        </section>
    )
}

export default Page