import type { Metadata } from "next";
import { Nunito_Sans, Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const albertSans = Albert_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Claude Monet Salon & Spa | Premium Beauty & Grooming Services",
  description: "Experience luxury beauty and grooming services at Claude Monet Salon & Spa for both men and women. Expert hair styling, men's grooming, nail services, makeup, skincare, and more. Book your appointment today.",
  keywords: "salon, spa, beauty, hair styling, nails, makeup, skincare, luxury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${albertSans.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#FAF8F3] flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
