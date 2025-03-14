import FAQSection from '@/components/FAQSection'
import MidSection from '@/components/PageMidSection'

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