import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Community from '@/components/sections/Community'
import WaitlistModal from '@/components/WaitlistModal'

export const metadata: Metadata = {
  title: 'Trail Blazers | Trust. Truth. Transparency.',
  description: 'Trail Blazers is transforming how business value is created through AI integration and rapid innovation.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Community />
      </main>
      <WaitlistModal />
    </>
  )
} 