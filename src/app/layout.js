import './globals.css'

export const metadata = {
  title: 'ARES',
  description: '<Mass Driver Simulation>',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
