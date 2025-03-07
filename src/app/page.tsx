import Experiences from '@/components/Experiences'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import MentalHealth from '@/components/MentalHealth'
import Steps from '@/components/Steps'

const Page = () => {
  return (
    <section>
      <div className="lg:min-h-screen flex flex-col">
        <Hero />
      </div>
      <MentalHealth />
      <Experiences />
      <Steps />
      <FAQ />
    </section>
  )
}

export default Page