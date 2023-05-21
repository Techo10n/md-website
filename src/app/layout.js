import './globals.css'

export const metadata = {
  title: 'ARES',
  description: '<Mass driver simulation>',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
