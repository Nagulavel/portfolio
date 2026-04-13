import './globals.css'

export const metadata = {
  title: 'Nagulavel M — Portfolio',
  description: 'CSE Student | Video Editor & Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
