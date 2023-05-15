import Navbar from '@/components/Navbar'
import './globals.css'
import Cursor from '@/components/Cursor'
import PreLoader from '@/components/loader/Preloader';


export const metadata = {
  title: "Farhan Mansuri",
  description:
    "Frontend Engineer / Full Stack Engineer. Focused on interfaces and experiences, based in Mumbai, India.",
  generator: "Next.js",
  applicationName: "Farhan Mansuri",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "backend",
    "react",
    "frontend developer",
    "fullstack developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "mumbai",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: " Farhan Mansuri - Fullstack developer",
    description:
      "",
    url: "https://farhanmansuri.vercel.app/",
    siteName: "farhanmansuri.vercel.app/",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div>
          <PreLoader />
          <Cursor />
          <Navbar />
          {children}
        </div>

      </body>
    </html>
  )
}
