import Navbar from "./_components/navbar"
import Hero from "./_components/hero"
import About from "./_components/about"
import Services from "./_components/services"
import Clients from "./_components/clients"
import Contact from "./_components/contact"
import Footer from "./_components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
