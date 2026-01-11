"use client"

import React from "react"

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
          <div className="text-xl font-semibold text-white flex items-center gap-2">
            <Code size={24} className="text-yellow-400" />
            CashScript
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
              Features
            </a>
            <a href="#community" className="text-sm text-white/60 hover:text-white transition-colors">
              Community
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button type="button" variant="ghost" size="sm">
              Docs
            </Button>
            <Button type="button" variant="default" size="sm">
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
              href="#how-it-works"
              className="text-sm text-white/60 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#features"
              className="text-sm text-white/60 hover:text-white transition-colors py-2"
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
              <Button type="button" variant="ghost" size="sm" className="w-full justify-start">
                Docs
              </Button>
              <Button type="button" variant="default" size="sm" className="w-full justify-start">
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

// Hero Component
const Hero = React.memo(() => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-24 pt-32"
      style={{
        animation: "fadeIn 0.6s ease-out",
      }}
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

      <aside className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm max-w-full">
        <span className="text-xs text-center whitespace-nowrap text-yellow-300">
          Testnet supported • Wallet connect
        </span>
      </aside>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl px-6 leading-tight mb-6"
        style={{
          background: "linear-gradient(to bottom, #fbbf24, #fcd34d, rgba(252, 211, 77, 0.6))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.05em",
        }}
      >
        Build smart contracts <br />
        on Bitcoin Cash
        <br />
        <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl">In your browser</span>
      </h1>

      <p className="text-sm md:text-base text-center max-w-3xl px-6 mb-10 text-gray-300">
        Write CashScript, compile, deploy and interact with BCH smart contracts — no setup, no CLI, just code.
      </p>

      <div className="flex items-center gap-4 relative z-10 mb-16 flex-wrap justify-center">
        <Button
          type="button"
          variant="gradient"
          size="lg"
          className="rounded-lg flex items-center justify-center gap-2"
          aria-label="Open the playground"
        >
          <Code size={20} />
          Open Playground
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="rounded-lg flex items-center justify-center gap-2"
          aria-label="View documentation"
        >
          View Docs
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="w-full max-w-6xl relative pb-20">
        <div className="relative z-10 rounded-lg overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900">
          {/* Header */}
          <div className="bg-gray-800/50 px-6 py-3 border-b border-gray-700/50 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-gray-400 ml-4">contract.cash</span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-96">
            {/* Code Editor */}
            <div className="bg-black/40 p-6 border-r border-gray-700/50 font-mono text-sm overflow-auto">
              <div className="text-gray-400 leading-relaxed">
                <div>
                  <span className="text-purple-400">pragma</span> <span className="text-blue-400">cashscript</span>{" "}
                  <span className="text-orange-400">^</span>0.9.0;
                </div>
                <div className="mt-2">
                  <span className="text-gray-500">// Simple escrow contract</span>
                </div>
                <div className="mt-2">
                  <span className="text-purple-400">contract</span> <span className="text-yellow-300">Escrow</span>
                  {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">pubkey</span> sender,
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">pubkey</span> recipient
                </div>
                <div>{"}"}</div>
                <div className="mt-2">
                  <span className="text-purple-400">function</span> <span className="text-green-300">release</span>(){" "}
                  {"{"}
                </div>
                <div className="ml-4">require(checkSig(recipient));</div>
                <div>{"}"}</div>
              </div>
            </div>

            {/* Output Panel */}
            <div className="bg-black/60 p-6 flex flex-col gap-4">
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">ABI</h4>
                <div className="bg-gray-800/30 rounded p-3 text-xs text-gray-300 font-mono overflow-auto max-h-24">
                  <div>{"{"}</div>
                  <div className="ml-2">
                    <span className="text-blue-300">"functions"</span>: [{"{"}
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-300">"name"</span>: <span className="text-green-300">"release"</span>
                  </div>
                  <div className="ml-2">{"}"}]</div>
                  <div>{"}"}</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Bytecode</h4>
                <div className="bg-gray-800/30 rounded p-3 text-xs text-yellow-300 font-mono truncate">
                  521483ca7a76a9148a...
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-black/80 border-t border-gray-700/50 p-4 font-mono text-xs text-green-400">
            <div>$ npm run compile</div>
            <div className="text-gray-500 mt-1">✓ Compiled successfully</div>
            <div className="text-gray-500">TX Hash: 0x7f3a2b8c9e1d4f6a...</div>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

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
    <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Get from idea to deployed contract in minutes, not hours</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 hover:border-yellow-500/50 transition-colors"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="mb-4">
                <Icon size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
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
            className="bg-gray-800/20 border border-gray-700/50 rounded-lg p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors"
            style={{
              animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
            }}
          >
            <Zap size={20} className="text-yellow-400 flex-shrink-0" />
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
            <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
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
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <WhoIsThisFor />
      <Community />
    </main>
  )
}
