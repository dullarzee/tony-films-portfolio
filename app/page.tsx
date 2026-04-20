import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { VideoShowcase } from '@/components/VideoShowcase'
import { About } from '@/components/About'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] transition-colors duration-300">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
