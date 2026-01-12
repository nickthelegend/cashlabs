import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CashLabs - Build Bitcoin Cash Smart Contracts | CashScript IDE & Node.js Tools',
  description: 'Build, compile, and deploy Bitcoin Cash smart contracts in your browser with CashLabs. Free CashScript IDE, Node.js transaction tools, testnet support, and wallet integration. No setup required.',
  keywords: [
    'Bitcoin Cash',
    'BCH',
    'Smart Contracts',
    'CashScript',
    'Blockchain Development',
    'Cryptocurrency',
    'DeFi',
    'Web3',
    'Decentralized Finance',
    'Bitcoin Cash IDE',
    'CashScript Compiler',
    'Blockchain IDE',
    'Smart Contract Development',
    'Bitcoin Cash Testnet',
    'Cryptocurrency Development',
    'Node.js Bitcoin Cash',
    'Bitcoin Cash Transactions',
    'CashTokens',
    'UTXO',
    'Blockchain Programming',
    'Bitcoin Cash Tools',
    'Smart Contract Deployment',
    'AI Agent',
    'AI Chat',
    'Model Context Protocol',
    'MCP Server',
    'BCH AI',
    'CashScript Tutorial',
    'Bitcoin Cash Developer',
    'Blockchain Tools',
    'Cryptocurrency Tools',
    'Bitcoin Cash SDK',
    'Web3 Development',
    'Decentralized Applications',
    'DApp Development'
  ],
  authors: [{ name: 'CashLabs Team' }],
  creator: 'CashLabs',
  publisher: 'CashLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cashlabs.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CashLabs - Build Bitcoin Cash Smart Contracts | Free CashScript IDE',
    description: 'Build, compile, and deploy Bitcoin Cash smart contracts in your browser. Free CashScript IDE with testnet support, wallet integration, and Node.js tools. Start coding now!',
    url: 'https://cashlabs.dev',
    siteName: 'CashLabs',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'CashLabs - Bitcoin Cash Smart Contract Development Platform',
      },
      {
        url: '/images/flow.png',
        width: 1200,
        height: 630,
        alt: 'CashLabs Flow - Bitcoin Cash Transaction Processing',
      },
      {
        url: '/images/agent.png',
        width: 1200,
        height: 630,
        alt: 'AI Chat - Bitcoin Cash AI Assistant',
      },
      {
        url: '/images/tools.png',
        width: 1200,
        height: 630,
        alt: 'MCP Server - Bitcoin Cash Developer Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CashLabs - Build Bitcoin Cash Smart Contracts | Free CashScript IDE',
    description: 'Build, compile, and deploy Bitcoin Cash smart contracts in your browser. Free CashScript IDE with testnet support and wallet integration.',
    images: ['/images/hero.png'],
    creator: '@cashlabs',
    site: '@cashlabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Blockchain Development Tools',
  generator: 'Next.js',
  applicationName: 'CashLabs',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://play.cashlabs.dev" />
        <link rel="preconnect" href="https://flow.cashlabs.dev" />
        <link rel="preconnect" href="https://chat.cashlabs.dev" />
        <link rel="preconnect" href="https://mcp.cashlabs.dev" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CashLabs",
              "url": "https://cashlabs.dev",
              "logo": "https://cashlabs.dev/logo.png",
              "description": "Build Bitcoin Cash smart contracts in your browser with CashLabs. Free CashScript IDE and Node.js transaction tools.",
              "foundingDate": "2024",
              "sameAs": [
                "https://github.com/cashlabs",
                "https://twitter.com/cashlabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CashLabs",
              "url": "https://cashlabs.dev",
              "description": "Build Bitcoin Cash smart contracts in your browser",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cashlabs.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - SoftwareApplications */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "CashLabs Play",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://play.cashlabs.dev",
                "description": "Browser-based IDE for building Bitcoin Cash smart contracts with CashScript",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "AI Chat",
                "applicationCategory": "Assistant",
                "operatingSystem": "Web Browser",
                "url": "https://chat.cashlabs.dev",
                "description": "AI Agent powered by MCP for Bitcoin Cash interactions",
                "image": "https://cashlabs.dev/images/agent.png",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "MCP Server",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Node.js",
                "url": "https://mcp.cashlabs.dev",
                "description": "Modular MCP server providing tools for Bitcoin Cash development",
                "image": "https://cashlabs.dev/images/tools.png",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              }
            ])
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}