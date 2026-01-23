"use client"

import React from "react"
import Image from "next/image"

// Inline Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "gradient"
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-white text-black hover:bg-gray-100",
      secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
      ghost: "hover:bg-gray-800/50 text-white",
      gradient: "bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95",
    }

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    }

    return (
      <button ref={ref} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

// Icons
const ArrowRight = ({ className = "", size = 16 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const Menu = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const X = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const ZoomIn = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
)

const Code = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const Zap = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const Terminal = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
)

const Github = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 .5 6 1.5 6 7v4" />
    <path d="M9 22v-4a4.8 4.8 0 0 0-1-3.5c3 .5 6 1.5 6 7v4" />
    <path d="M9 9h6" />
    <path d="M12 14h0" />
    <path d="M12 11h0" />
    <circle cx="12" cy="11" r="6" />
    <path d="M6 22c-1 0-1-1-1-1s0-4 5-4 5 3 5 4 0 1-1 1H6Z" />
  </svg>
)

const Send = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m22 2-7 19-4-9-9-4Z" />
  </svg>
)

// Navigation Component
const Navigation = React.memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="CashLabs Logo" width={40} height={40} />
            CashLabs
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#products" className="text-sm text-white/60 hover:text-white transition-colors font-medium relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#61e9ba] transition-all group-hover:w-full"></span>
            </a>
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors font-medium relative group">
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#61e9ba] transition-all group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#61e9ba] transition-all group-hover:w-full"></span>
            </a>
            <a href="#community" className="text-sm text-white/60 hover:text-white transition-colors font-medium relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#61e9ba] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://docs.cashlabs.dev', '_blank')}
            >
              Docs
            </Button>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => window.open('https://play.cashlabs.dev', '_blank')}
            >
              Launch App
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#products"
              className="text-sm text-white/60 hover:text-white transition-colors py-2 border-b border-gray-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white/60 hover:text-white transition-colors py-2 border-b border-gray-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#features"
              className="text-sm text-white/60 hover:text-white transition-colors py-2 border-b border-gray-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#community"
              className="text-sm text-white/60 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800/50">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => window.open('https://docs.cashlabs.dev', '_blank')}
              >
                Docs
              </Button>
              <Button
                type="button"
                variant="default"
                size="sm"
                className="w-full justify-start"
                onClick={() => window.open('https://play.cashlabs.dev', '_blank')}
              >
                Launch App
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
})

Navigation.displayName = "Navigation"

// Image Preview Modal Component
const ImagePreviewModal = React.memo(({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title
}: {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title: string
}) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      style={{
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close preview"
        >
          <X size={32} />
        </button>

        {/* Title */}
        <div className="absolute -top-12 left-0 z-10">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>

        {/* Image Container */}
        <div
          className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900"
          style={{
            animation: "slideUp 0.3s ease-out",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>

        {/* Instructions */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-400 text-sm text-center">
            Press ESC or click outside to close
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
})

ImagePreviewModal.displayName = "ImagePreviewModal"

// Hero Component
const Hero = React.memo(() => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-24 pt-32"
      style={{
        animation: "fadeIn 0.6s ease-out",
      }}
      role="banner"
      aria-labelledby="hero-title"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <aside className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#61e9ba]/30 bg-[#61e9ba]/10 backdrop-blur-sm max-w-full">
        <span className="text-xs text-center whitespace-nowrap text-[#61e9ba]">
          Testnet supported • Wallet connect
        </span>
      </aside>

      <h1
        id="hero-title"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl px-6 leading-tight mb-6"
        style={{
          letterSpacing: "-0.05em",
        }}
      >
        <span className="bg-gradient-to-b from-[#61e9ba] via-[#8cf5d1] to-[#61e9ba]/60 bg-clip-text text-transparent inline-block">
          Build smart contracts <br />
          on Bitcoin Cash
        </span>
        <br />
        <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl">In your browser</span>
      </h1>

      <p className="text-sm md:text-base text-center max-w-3xl px-6 mb-10 text-gray-300" role="doc-subtitle">
        Write CashScript, compile, deploy and interact with BCH smart contracts — no setup, no CLI, just code.
      </p>

      <div className="flex items-center gap-4 relative z-10 mb-16 flex-wrap justify-center" role="group" aria-label="Main actions">
        <Button
          type="button"
          variant="default"
          size="lg"
          className="rounded-lg flex items-center justify-center gap-2 bg-[#61e9ba] text-black hover:bg-[#61e9ba]/90 border-none px-10"
          aria-label="Open the CashLabs playground to start building smart contracts"
          onClick={() => window.open('https://play.cashlabs.dev', '_blank')}
        >
          <Code size={20} aria-hidden="true" />
          Open Playground
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="rounded-lg flex items-center justify-center gap-2"
          aria-label="View CashLabs documentation and guides"
          onClick={() => window.open('https://docs.cashlabs.dev', '_blank')}
        >
          View Docs
          <ArrowRight size={20} aria-hidden="true" />
        </Button>
      </div>

      {/* Hero Image - Big and Responsive */}
      <div className="w-full max-w-7xl mx-auto mb-20 px-4 sm:px-6">
        <Image
          src="/images/hero.png"
          alt="CashLabs Play interface showing CashScript smart contract development environment with code editor, compiler output, and deployment tools"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl shadow-2xl border border-gray-700/50 hover:border-[#61e9ba]/30 transition-colors duration-300"
          priority
          loading="eager"
        />
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

// Products Section
const Products = React.memo(() => {
  const [previewModal, setPreviewModal] = React.useState<{
    isOpen: boolean
    imageSrc: string
    imageAlt: string
    title: string
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: ''
  })

  const openPreview = (imageSrc: string, imageAlt: string, title: string) => {
    setPreviewModal({
      isOpen: true,
      imageSrc,
      imageAlt,
      title
    })
  }

  const closePreview = () => {
    setPreviewModal({
      isOpen: false,
      imageSrc: '',
      imageAlt: '',
      title: ''
    })
  }

  return (
    <>
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for the Bitcoin Cash Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A suite of powerful, modular tools designed to accelerate Bitcoin Cash development and enhance user experience.
          </p>
        </div>

        {/* Structured Data for Products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "CashLabs Products",
              "description": "Bitcoin Cash development tools, AI agents, and MCP servers",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "CashLabs Play",
                  "description": "Browser-based IDE for building Bitcoin Cash smart contracts with CashScript",
                  "url": "https://play.cashlabs.dev",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Web Browser",
                  "image": "https://cashlabs.dev/images/hero.png"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "CashLabs Flow",
                  "description": "Node.js tools for Bitcoin Cash transaction processing and wallet integration",
                  "url": "https://flow.cashlabs.dev",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Node.js",
                  "image": "https://cashlabs.dev/images/flow.png"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 3,
                  "name": "AI Chat",
                  "description": "AI Agent powered by MCP server for Bitcoin Cash interactions",
                  "url": "https://chat.cashlabs.dev",
                  "applicationCategory": "Assistant",
                  "operatingSystem": "Web Browser",
                  "image": "https://cashlabs.dev/images/agent.png"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 4,
                  "name": "MCP Server",
                  "description": "Modular MCP server providing tools for Bitcoin Cash development",
                  "url": "https://mcp.cashlabs.dev",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Node.js",
                  "image": "https://cashlabs.dev/images/tools.png"
                }
              ]
            })
          }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {/* AI Chat - NEW */}
          <div className="group relative bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-[#61e9ba]/50 rounded-2xl p-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#61e9ba]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61e9ba]/10 flex items-center justify-center border border-[#61e9ba]/20 group-hover:scale-110 transition-transform">
                    <Send size={24} className="text-[#61e9ba]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#61e9ba] transition-colors line-clamp-1">AI Chat</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-[#61e9ba]/10 text-[#61e9ba] text-[10px] font-bold uppercase tracking-wider rounded border border-[#61e9ba]/20">
                        NEW
                      </span>
                      <span className="text-gray-500 text-xs">chat.cashlabs.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Interact with the Bitcoin Cash network using natural language. Powered by our custom MCP server,
                AI Chat can manage wallets, check balances, and execute transactions.
              </p>

              <div
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-8 cursor-zoom-in group/img"
                onClick={() => openPreview('/images/agent.png', 'AI Chat - Bitcoin Cash Assistant', 'AI Chat')}
              >
                <Image
                  src="/images/agent.png"
                  alt="AI Chat Assistant - Powered by MCP"
                  width={600}
                  height={337}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={24} className="text-white transform scale-90 group-hover/img:scale-100 transition-transform" />
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  className="bg-[#61e9ba] text-black hover:bg-[#61e9ba]/90 font-bold"
                  onClick={() => window.open('https://chat.cashlabs.dev', '_blank')}
                >
                  Launch Chat
                </Button>
                <div className="flex items-center gap-2 text-xs text-gray-500 px-2 uppercase tracking-widest font-semibold">
                  <Zap size={14} className="text-[#61e9ba]" />
                  MCP Powered
                </div>
              </div>
            </div>
          </div>

          {/* MCP Server - NEW */}
          <div className="group relative bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-[#61e9ba]/50 rounded-2xl p-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#61e9ba]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61e9ba]/10 flex items-center justify-center border border-[#61e9ba]/20 group-hover:scale-110 transition-transform">
                    <Terminal size={24} className="text-[#61e9ba]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#61e9ba] transition-colors line-clamp-1">MCP Server</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/20">
                        Protocol
                      </span>
                      <span className="text-gray-500 text-xs">mcp.cashlabs.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                A standardized interface for Bitcoin Cash tools. Easily integrate BCH functionality
                into any AI tool or application that supports the Model Context Protocol.
              </p>

              <div
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-8 cursor-zoom-in group/img"
                onClick={() => openPreview('/images/tools.png', 'MCP Server - Developer Tools', 'MCP Server')}
              >
                <Image
                  src="/images/tools.png"
                  alt="MCP Server Tools for Bitcoin Cash"
                  width={600}
                  height={337}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={24} className="text-white transform scale-90 group-hover/img:scale-100 transition-transform" />
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="border-gray-700 text-white hover:bg-gray-800"
                  onClick={() => window.open('https://mcp.cashlabs.dev', '_blank')}
                >
                  View Tools
                </Button>
                <div className="flex items-center gap-2 text-xs text-gray-500 px-2 uppercase tracking-widest font-semibold">
                  <Github size={14} className="text-[#61e9ba]" />
                  Open Source
                </div>
              </div>
            </div>
          </div>

          {/* CashLabs Play */}
          <div className="group relative bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-[#61e9ba]/50 rounded-2xl p-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#61e9ba]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61e9ba]/10 flex items-center justify-center border border-[#61e9ba]/20 group-hover:scale-110 transition-transform">
                    <Code size={24} className="text-[#61e9ba]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#61e9ba] transition-colors line-clamp-1">CashLabs Play</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded border border-purple-500/20">
                        IDE
                      </span>
                      <span className="text-gray-500 text-xs">play.cashlabs.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Build, compile, and deploy Bitcoin Cash smart contracts directly in your browser.
                No setup required - just start coding with CashScript.
              </p>

              <div
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-8 cursor-zoom-in group/img"
                onClick={() => openPreview('/images/hero.png', 'CashLabs Play - Smart Contract IDE', 'CashLabs Play')}
              >
                <Image
                  src="/images/hero.png"
                  alt="CashLabs Play - Smart Contract IDE"
                  width={600}
                  height={337}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={24} className="text-white transform scale-90 group-hover/img:scale-100 transition-transform" />
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full border-gray-700 text-white hover:bg-gray-800"
                  onClick={() => window.open('https://play.cashlabs.dev', '_blank')}
                >
                  Open IDE
                </Button>
              </div>
            </div>
          </div>

          {/* CashLabs Flow */}
          <div className="group relative bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-[#61e9ba]/50 rounded-2xl p-1 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#61e9ba]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61e9ba]/10 flex items-center justify-center border border-[#61e9ba]/20 group-hover:scale-110 transition-transform">
                    <Zap size={24} className="text-[#61e9ba]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#61e9ba] transition-colors line-clamp-1">CashLabs Flow</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-500/20">
                        Automation
                      </span>
                      <span className="text-gray-500 text-xs">flow.cashlabs.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Execute Bitcoin Cash transactions and manage workflows with Node.js.
                Powerful tools for real-time transaction processing.
              </p>

              <div
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-8 cursor-zoom-in group/img"
                onClick={() => openPreview('/images/flow.png', 'CashLabs Flow - Transaction Processing', 'CashLabs Flow')}
              >
                <Image
                  src="/images/flow.png"
                  alt="CashLabs Flow - Transaction Processing"
                  width={600}
                  height={337}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={24} className="text-white transform scale-90 group-hover/img:scale-100 transition-transform" />
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full border-gray-700 text-white hover:bg-gray-800"
                  onClick={() => window.open('https://flow.cashlabs.dev', '_blank')}
                >
                  Explore Flow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={previewModal.isOpen}
        onClose={closePreview}
        imageSrc={previewModal.imageSrc}
        imageAlt={previewModal.imageAlt}
        title={previewModal.title}
      />
    </>
  )
})

Products.displayName = "Products"

// How It Works Section
const HowItWorks = React.memo(() => {
  const steps = [
    {
      icon: Code,
      title: "Write CashScript",
      description: "Templates and examples included. Start from scratch or use prebuilt patterns.",
    },
    {
      icon: Zap,
      title: "Compile & Simulate",
      description: "See bytecode and ABI instantly. Test your contracts before deployment.",
    },
    {
      icon: Terminal,
      title: "Deploy & Interact",
      description: "Sign transactions with browser wallet. Deploy to testnet or mainnet.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto" aria-labelledby="how-it-works-title">
      <header className="text-center mb-12">
        <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Get from idea to deployed contract in minutes, not hours</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8" role="list">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <article
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 hover:border-[#61e9ba]/50 transition-colors"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              role="listitem"
            >
              <div className="mb-4" aria-hidden="true">
                <Icon size={32} className="text-[#61e9ba]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
})

HowItWorks.displayName = "HowItWorks"

// Features Grid
const FeaturesGrid = React.memo(() => {
  const features = [
    "CashScript compiler",
    "ABI auto UI",
    "Wallet connect (Paytaca, Selene)",
    "Testnet faucet",
    "Shareable contract links",
    "CashTokens ready",
  ]

  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to build, test, and deploy smart contracts
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/20 border border-gray-700/50 rounded-lg p-6 flex items-center gap-4 hover:border-[#61e9ba]/30 transition-colors"
            style={{
              animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
            }}
          >
            <Zap size={20} className="text-[#61e9ba] flex-shrink-0" />
            <span className="text-white font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
})

FeaturesGrid.displayName = "FeaturesGrid"

// Who Is This For
const WhoIsThisFor = React.memo(() => {
  const audience = [
    "Hackathon builders",
    "BCH developers",
    "Students learning UTXO contracts",
    "Rapid prototyping teams",
  ]

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who Is This For?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {audience.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-gray-800/10 border border-gray-700/30">
            <div className="w-6 h-6 rounded-full bg-[#61e9ba]/20 flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#61e9ba]" />
            </div>
            <span className="text-gray-300 text-lg">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
})

WhoIsThisFor.displayName = "WhoIsThisFor"

// Open Source / Community
const Community = React.memo(() => {
  return (
    <section id="community" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-lg p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Source & Community</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We believe in the power of open source. Contributions welcome! Join our community of Bitcoin Cash developers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button type="button" variant="secondary" size="lg" className="flex items-center gap-2">
            <Github size={20} />
            GitHub Repo
          </Button>
          <Button type="button" variant="secondary" size="lg" className="flex items-center gap-2">
            <Send size={20} />
            Telegram
          </Button>
          <Button type="button" variant="secondary" size="lg" className="flex items-center gap-2">
            <Send size={20} />
            Discord
          </Button>
        </div>
      </div>
    </section>
  )
})

Community.displayName = "Community"

// Main Component
export default function Page() {
  return (
    <>
      {/* Additional SEO Head Elements */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "CashLabs - Build Bitcoin Cash Smart Contracts",
            "description": "Build, compile, and deploy Bitcoin Cash smart contracts in your browser with CashLabs. Free CashScript IDE and Node.js tools.",
            "url": "https://cashlabs.dev",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "CashLabs",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "hasPart": [
                {
                  "@type": "SoftwareApplication",
                  "name": "AI Chat",
                  "description": "Bitcoin Cash AI Assistant powered by MCP",
                  "url": "https://chat.cashlabs.dev"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "MCP Server",
                  "description": "Bitcoin Cash Model Context Protocol Server",
                  "url": "https://mcp.cashlabs.dev"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cashlabs.dev"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-black text-white" role="main">
        <Navigation />
        <Hero />
        <Products />
        <HowItWorks />
        <FeaturesGrid />
        <WhoIsThisFor />
        <Community />

        {/* Footer with additional SEO content */}
        <footer className="bg-gray-900/50 border-t border-gray-800/50 py-12 px-6" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="CashLabs Logo" width={32} height={32} />
                  <span className="text-lg font-semibold text-white">CashLabs</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Build Bitcoin Cash smart contracts in your browser. Free tools for developers.
                </p>
              </div>

              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Products</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://chat.cashlabs.dev" className="text-gray-400 hover:text-[#61e9ba] transition-colors" target="_blank" rel="noopener noreferrer">
                      AI Chat
                    </a>
                  </li>
                  <li>
                    <a href="https://mcp.cashlabs.dev" className="text-gray-400 hover:text-[#61e9ba] transition-colors" target="_blank" rel="noopener noreferrer">
                      MCP Server
                    </a>
                  </li>
                  <li>
                    <a href="https://play.cashlabs.dev" className="text-gray-400 hover:text-[#61e9ba] transition-colors" target="_blank" rel="noopener noreferrer">
                      CashLabs Play
                    </a>
                  </li>
                  <li>
                    <a href="https://flow.cashlabs.dev" className="text-gray-400 hover:text-[#61e9ba] transition-colors" target="_blank" rel="noopener noreferrer">
                      CashLabs Flow
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#how-it-works" className="text-gray-400 hover:text-[#61e9ba] transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-[#61e9ba] transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#community" className="text-gray-400 hover:text-[#61e9ba] transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technology */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Technology</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400">Bitcoin Cash (BCH)</li>
                  <li className="text-gray-400">CashScript</li>
                  <li className="text-gray-400">Smart Contracts</li>
                  <li className="text-gray-400">Node.js</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800/50 mt-8 pt-8 text-center space-y-2">
              <p className="text-gray-400 text-sm">
                © 2024 CashLabs. Building the future of Bitcoin Cash development.
              </p>
              <p className="text-gray-500 text-xs">
                Made by{' '}
                <a
                  href="https://github.com/nickthelegend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61e9ba] hover:text-[#61e9ba]/80 transition-colors underline"
                >
                  nickthelegend
                </a>
                {' '}for the BCH-1 Hackcelerator
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
