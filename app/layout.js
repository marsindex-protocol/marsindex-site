import '../styles/globals.css'

export const metadata = {
  title: 'MARSINDEX',
  description: 'Genesis Index Protocol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  )
}