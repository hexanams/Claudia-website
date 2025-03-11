import Issues from '@/components/Issues'
import MidSection from '@/components/PageMidSection'


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