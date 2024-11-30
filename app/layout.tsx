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
    default: 'Barwaqo Social Development Committee (BSDC) - Empowering Somali Communities',
    template: '%s | BSDC - Community Development in Somalia'
  },
  description: 'BSDC is a dedicated non-profit organization transforming communities in Somalia through sustainable development, humanitarian assistance, and peacebuilding initiatives since 2020.',
  applicationName: 'Barwaqo Social Development Committee',
  keywords: [
    'Somalia NGO', 'humanitarian assistance', 'community development', 
    'sustainable livelihoods', 'peacebuilding', 'water sanitation', 
    'health nutrition', 'education protection', 'environmental conservation',
    'Kismayo', 'Badhaadhe', 'Afmadow', 'Jamaame', 'Dhobley', 
    'Elberde', 'Yeed', 'Mogadishu'
  ],
  authors: [{ name: 'BSDC Team', url: 'https://bsdc.so/about' }],
  creator: 'Barwaqo Social Development Committee',
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
    title: 'Barwaqo Social Development Committee - Transforming Communities in Somalia',
    description: 'BSDC is a dedicated non-profit organization transforming communities in Somalia through sustainable development, humanitarian assistance, and peacebuilding initiatives since 2020.',
    siteName: 'BSDC NGO',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'BSDC Logo - Empowering Somali Communities'
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Barwaqo Social Development Committee - Empowering Somali Communities',
    description: 'BSDC is a dedicated non-profit organization transforming communities in Somalia through sustainable development, humanitarian assistance, and peacebuilding initiatives since 2020.',
    images: ['/logo.jpg']
  },
  
  // verification: {
  //   google: 'your-google-site-verification-code',
  //   // Add other verification codes as needed
  // },
  
  alternates: {
    canonical: 'https://bsdc.so'
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
