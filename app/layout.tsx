import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Fratelli Remodel | Las Vegas General Contractor — Licensed & Insured",
  description:
    "Fratelli Remodel is a licensed and insured Las Vegas general contractor specializing in kitchen remodels, bathroom remodels, and full home remodels. Clear communication, quality craftsmanship.",
  keywords:
    "Las Vegas general contractor, Las Vegas remodeling, kitchen remodel Las Vegas, bathroom remodel Las Vegas, full home remodel Las Vegas, licensed insured contractor Las Vegas, older home remodel Las Vegas",
  openGraph: {
    title: "Fratelli Remodel | Las Vegas General Contractor",
    description:
      "Licensed and insured Las Vegas remodeling contractor. Clear communication, quality craftsmanship, and a better remodeling experience from start to finish.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
