import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { Toaster } from 'sonner'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { Analytics } from '@vercel/analytics/react'
import ClientOnly from '@/components/ClientOnly'
import { ModalProvider } from '@/lib/context/ModalContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://trailblazers.com'),
  title: {
    default: 'Trail Blazers | Trust. Truth. Transparency.',
    template: '%s | Trail Blazers'
  },
  description: 'Trail Blazers is transforming how business value is created through AI integration and rapid innovation.',
  keywords: ['venture capital', 'AI integration', 'innovation', 'startups', 'technology'],
  openGraph: {
    title: 'Trail Blazers | Venture Capital & Innovation',
    description: 'Trail Blazers is a venture capital firm focused on funding and supporting innovative startups that are blazing new trails in technology and business.',
    url: 'https://trailblazers.com',
    siteName: 'Trail Blazers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trail Blazers',
    description: 'Transforming business through AI integration and innovation',
    creator: '@trailblazers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-900`}>
        <ClientOnly>
          <ScrollProgress />
          <ModalProvider>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(0, 0, 0, 0.9)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            />
          </ModalProvider>
        </ClientOnly>
        <Analytics />
      </body>
    </html>
  )
} 