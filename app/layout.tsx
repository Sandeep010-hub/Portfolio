import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yaswanths.dev'),
  title: 'Yaswanth Sai Sandeep Kalagatla - Full Stack Developer',
  description: 'Full-stack developer with 2+ years of experience in MERN stack, startup leadership as CTO at WEBORTEX, and passion for building impactful web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'MERN Stack', 'WEBORTEX', 'Portfolio'],
  authors: [{ name: 'Yaswanth Sai Sandeep Kalagatla' }],
  creator: 'Yaswanth Sai Sandeep Kalagatla',
  openGraph: {
    title: 'Yaswanth Sai Sandeep Kalagatla - Full Stack Developer',
    description: 'Full-stack developer with 2+ years of experience in MERN stack, startup leadership as CTO at WEBORTEX, and passion for building impactful web applications.',
    url: 'https://yaswanths.dev',
    siteName: 'Yaswanth Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yaswanth Sai Sandeep Kalagatla - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaswanth Sai Sandeep Kalagatla - Full Stack Developer',
    description: 'Full-stack developer with 2+ years of experience in MERN stack, startup leadership as CTO at WEBORTEX, and passion for building impactful web applications.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 