import localFont from "next/font/local"
import "./globals.css"
// pages/_app.js
import { library } from "@fortawesome/fontawesome-svg-core"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS file

config.autoAddCss = false // Prevent FontAwesome from adding its own CSS

// Add icons to the library
library.add(faInstagram)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})
const afacadFlux = localFont({
  src: "./fonts/AfacadFlux.ttf",
  variable: "--font-afacad-flux",
  weight: "100 900",
})

export const metadata = {
  title: "Harsh's Portfolio",
  description: "A showcase of my work and skills.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${afacadFlux.variable} antialiased`}>{children}</body>
    </html>
  )
}
