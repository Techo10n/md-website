import './globals.css'

export const metadata = {
  title: 'Mass Driver | Ethan A. Gerber and Zechariah Frierson',
  description: '<Mass driver simulation>',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
