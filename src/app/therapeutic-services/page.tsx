import MidSection from '@/components/PageMidSection'
import TheraputicServices from '@/components/TheraputicServices'

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