import About from "@/components/About"
import MidSection from "@/components/PageMidSection"
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