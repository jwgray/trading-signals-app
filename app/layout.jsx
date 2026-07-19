import './globals.css'

export const metadata = {
  title: 'Trading Signals Dashboard',
  description: 'Jim Simmons Strategy - Momentum + ML Trading Signals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
