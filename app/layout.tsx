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
  title: "NGO Website",
  description: "An impactful NGO website built with Next.js and Tailwind CSS.",
};

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
