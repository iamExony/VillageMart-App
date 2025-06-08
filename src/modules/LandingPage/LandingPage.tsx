import { AboutUs, Footer, HeroSection, HeroSection2, Navbar, Services } from "@/components"


const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HeroSection2 />
        <Services />
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default LandingPage