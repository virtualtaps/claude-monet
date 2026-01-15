"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Hair Styling", href: "#" },
    { name: "Nail Services", href: "#" },
    { name: "Lash Extensions", href: "#" },
    { name: "Makeup", href: "#" },
    { name: "Electrolysis", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#specialists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#" },
  ],
  brands: [
    { name: "Matrix" },
    { name: "Moroccanoil" },
    { name: "Biolage" },
    { name: "Lanza" },
    { name: "Redken" },
    { name: "L'Oréal" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5F0E8] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Claude Monet Salon Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gold-gradient font-[family-name:var(--font-heading)]">
                  Claude Monet
                </h2>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Salon & Spa
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Experience luxury beauty and grooming services crafted by expert stylists and barbers for men and women. 
              We bring out the best version of you with premium treatments 
              and personalized care.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white border border-[#E8DDD0] rounded-sm flex items-center justify-center hover:bg-[#8B6F47] hover:border-[#8B6F47] group transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 font-[family-name:var(--font-heading)]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#8B6F47] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 font-[family-name:var(--font-heading)]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#8B6F47] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 font-[family-name:var(--font-heading)]">
              Premium Brands
            </h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((brand) => (
                <li key={brand.name}>
                  <span className="text-muted-foreground text-sm">
                    {brand.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E8DDD0]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 Claude Monet Salon & Spa. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-[#8B6F47] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#8B6F47] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#8B6F47] text-white rounded-sm flex items-center justify-center shadow-lg shadow-[#8B6F47]/20 hover:bg-[#A0826D] transition-colors duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
