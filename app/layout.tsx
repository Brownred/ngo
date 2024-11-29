// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/layout/navbar";
import Footer from "./_components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "800", "600", "700"], // Choose weights you plan to use
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"], // Choose weights you plan to use
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bsdc.so'),
  title: {
    default: 'BSDC - Empowering Communities, Creating Change',
    template: '%s | BSDC NGO'
  },
  description: 'BSDC is a dedicated non-profit organization working to transform communities through sustainable development, education, and social innovation.',
  applicationName: 'BSDC NGO',
  keywords: [
    'NGO', 'community development', 'social impact', 'nonprofit', 
    'sustainability', 'social innovation', 'community empowerment'
  ],
  authors: [{ name: 'BSDC Team', url: 'https://bsdc.so' }],
  creator: 'BSDC NGO Team',
  publisher: 'BSDC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bsdc.so',
    title: 'BSDC - Empowering Communities, Creating Change',
    description: 'BSDC is a dedicated non-profit organization working to transform communities through sustainable development, education, and social innovation.',
    siteName: 'BSDC NGO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSDC - Empowering Communities, Creating Change',
    description: 'BSDC is a dedicated non-profit organization working to transform communities through sustainable development, education, and social innovation.',
  },
  verification: {
    google: 'your-google-site-verification-code',
    // Add other verification codes as needed
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} antialiased scroll-smooth font-lato`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
