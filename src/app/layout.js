import './globals.css'

export const metadata = {
  title: 'ARES Engineering',
  description: '<Engineering Projects>',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
