export default function MarsIndexLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <h1 className="text-6xl font-bold tracking-tight">MARSINDEX</h1>
        <p className="mt-6 text-2xl text-red-400">Price Mars Before We Reach It</p>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          The world’s first decentralized valuation index protocol for extraterrestrial resources.
        </p>
        <button className="mt-10 rounded-2xl border border-red-500 px-8 py-4 text-lg hover:bg-red-500/20">
          Join Genesis Waitlist
        </button>
      </section>

      <section className="px-8 py-24 text-center">
        <h2 className="text-4xl font-semibold">MXI Tokenomics</h2>
        <p className="mt-6 text-zinc-400">Fixed Supply: 25,922,000,000 MXI</p>
        <p className="mt-2 text-zinc-400">Built on Base</p>
      </section>

      <section className="px-8 py-24 text-center">
        <h2 className="text-4xl font-semibold">Genesis Vision</h2>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-300">
          MARSINDEX establishes the valuation layer for humanity’s extraterrestrial economy.
        </p>
      </section>

      <footer className="border-t border-zinc-800 px-8 py-10 text-center text-zinc-500">
        MARSINDEX Protocol · Built on Base
      </footer>
    </div>
  )
}
