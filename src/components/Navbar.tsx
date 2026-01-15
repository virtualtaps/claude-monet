"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Specialists", href: "/#specialists" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-[#F5F0E8] border-b border-[#E8DDD0] py-2">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8B6F47] flex-shrink-0" />
              <span className="whitespace-nowrap">Mon-Fri: 10 AM - 7 PM | Sat: 10 AM - 5 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#8B6F47]">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">+1 331-901-2020</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-lg shadow-lg shadow-[#8B6F47]/10"
            : "bg-[#FAF8F3]/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Claude Monet Salon Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-sm sm:text-base md:text-xl font-bold tracking-wide font-[family-name:var(--font-heading)] leading-tight">
                  <span className="text-gold-gradient">Claude Monet</span>
                </h1>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase leading-tight">
                  Salon & Spa
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-[#8B6F47] transition-colors duration-300 animated-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-6 py-5 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                variant="ghost"
                size="icon"
                className="text-[#8B6F47] hover:bg-[#8B6F47]/10 h-10 w-10"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FAF8F3] border-l border-[#E8DDD0] w-full sm:w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="px-6 pt-8 pb-6 border-b border-[#E8DDD0]">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 flex-shrink-0">
                        <Image
                          src="/logo.png"
                          alt="Claude Monet Salon Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gold-gradient font-[family-name:var(--font-heading)] leading-tight break-words">
                          Claude Monet
                        </h2>
                        <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase leading-tight mt-0.5">
                          Salon & Spa
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-4 px-4 text-base font-medium text-foreground/90 hover:text-[#8B6F47] hover:bg-[#F5F0E8] transition-all duration-300 rounded-lg active:bg-[#F5F0E8]"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* Footer Section */}
                  <div className="mt-auto border-t border-[#E8DDD0] px-6 py-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[#8B6F47]">
                        <Phone className="w-5 h-5 flex-shrink-0" />
                        <span className="font-semibold text-base">+1 331-901-2020</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Mon-Fri: 10 AM - 7 PM</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold py-6 rounded-none transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
