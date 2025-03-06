import Experiences from '@/components/Experiences'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MentalHealth from '@/components/MentalHealth'
import NavBar from '@/components/NavBar'
import Steps from '@/components/Steps'

const Page = () => {
  return (
    <section>
      <div className="lg:min-h-screen flex flex-col">
        <NavBar />
        <Hero />
      </div>
      <MentalHealth />
      <Experiences />
      <Steps />
      <FAQ />
      <Footer />

    </section>
  )
}

export default Page