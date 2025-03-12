import Contact from '@/components/Contact'
import MidSection from '@/components/PageMidSection'

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