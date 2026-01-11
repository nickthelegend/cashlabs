import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CashLabs - Bitcoin Cash Smart Contract Development',
    short_name: 'CashLabs',
    description: 'Build, compile, and deploy Bitcoin Cash smart contracts in your browser with CashLabs. Free CashScript IDE and Node.js tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#61e9ba',
    orientation: 'portrait-primary',
    categories: ['developer', 'productivity', 'finance', 'business'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    screenshots: [
      {
        src: '/images/hero.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'CashLabs Play - Smart Contract IDE',
      },
      {
        src: '/images/flow.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'CashLabs Flow - Transaction Processing',
      },
    ],
  }
}