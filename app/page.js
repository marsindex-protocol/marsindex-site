'use client'

import { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function MarsIndexLandingPageV2() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    setMessage(data.message)
    setEmail('')
  }

  const tokenomicsData = {
    labels: ['Team', 'Community', 'Reserve'],
    datasets: [
      {
        data: [20, 50, 30],
        backgroundColor: ['#ff0000', '#ff7f50', '#ffa500'],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* 背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,0,0,0.18),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent_0%,#ff000020_50%,transparent_100%)] animate-pulse" />

      {/* Landing Page */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="mb-6 text-red-500 tracking-[0.4em] text-sm uppercase">
          Genesis Index Protocol
        </div>
        <h1 className="text-7xl font-bold tracking-tight">MARSINDEX</h1>
        <p className="mt-8 text-3xl text-red-400">Price Mars Before We Reach It</p>
        <p className="mt-8 max-w-4xl text-xl text-zinc-300 leading-relaxed">
          The world’s first decentralized valuation index protocol for extraterrestrial resources.
        </p>

        {/* Waitlist */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col items-center w-full max-w-sm"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg text-black w-full mb-4"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 rounded-xl text-white hover:bg-red-600 w-full"
          >
            Join Genesis Waitlist
          </button>
          {message && <p className="mt-4 text-green-400">{message}</p>}
        </form>
      </section>

      {/* Tokenomics */}
      <section className="relative px-8 py-32 text-center border-t border-zinc-900">
        <h2 className="text-5xl font-semibold">MXI Tokenomics</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 p-8">
            <p className="text-zinc-400">Fixed Supply</p>
            <p className="mt-3 text-2xl">25,922,000,000 MXI</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-8">
            <p className="text-zinc-400">Settlement Layer</p>
            <p className="mt-3 text-2xl">Base</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-8">
            <p className="text-zinc-400">Protocol Status</p>
            <p className="mt-3 text-2xl text-red-400">Genesis</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto mt-12">
          <Pie data={tokenomicsData} />
        </div>
      </section>

      {/* Genesis Vision */}
      <section className="relative px-8 py-32 text-center border-t border-zinc-900">
        <h2 className="text-5xl font-semibold">Genesis Vision</h2>
        <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-300 leading-relaxed">
          MARSINDEX establishes the valuation layer for humanity’s extraterrestrial economy — pricing planetary resources before human settlement begins.
        </p>
      </section>

      {/* Genesis Map */}
      <section className="relative px-8 py-32 text-center border-t border-zinc-900">
        <h2 className="text-5xl font-semibold">Genesis Map (Coming Soon)</h2>
        <p className="mx-auto mt-8 max-w-4xl text-zinc-400 text-lg">
          火星矿产资源可视化模块正在开发中。
        </p>
      </section>

      <footer className="border-t border-zinc-900 px-8 py-12 text-center text-zinc-500">
        MARSINDEX Protocol · Built on Base · marsindex.io
      </footer>
    </div>
  )
}