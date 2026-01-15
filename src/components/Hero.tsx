"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Luxury Salon Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F3]/95 via-[#FAF8F3]/90 to-[#F5F0E8]/95" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A0826D]/10 rounded-full blur-3xl" />

      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 font-[family-name:var(--font-heading)]">
              <span className="text-foreground">Discover Your</span>
              <br />
              <span className="text-gold-gradient">True Beauty</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Experience luxury beauty services crafted by expert stylists for men and women.
              From stunning hair transformations to rejuvenating spa treatments,
              we bring out the best version of you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#3A2E1F] hover:bg-[#6B5D4F] text-white font-semibold px-8 py-6 rounded-lg group transition-all duration-300 hover:shadow-xl shadow-lg"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-[#F5F0E8] hover:bg-[#E8DDD0] text-[#3A2E1F] font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg shadow-md"
              >
                <a href="/services" className="w-full h-full block text-inherit no-underline">View Services</a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Expert Stylists" },
                { value: "10K+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#8B6F47] font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#E8DDD0] p-8 rounded-sm shadow-lg">
                {/* Wooden accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B6F47]/10" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#8B6F47]/15" />
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#8B6F47]/20" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#8B6F47] text-[#8B6F47]" />
                    ))}
                  </div>

                  <blockquote className="text-xl text-foreground/90 mb-6 leading-relaxed italic">
                    "The best salon experience I've ever had. The attention to detail
                    and the luxurious atmosphere made me feel like royalty."
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#8B6F47]/20 flex items-center justify-center">
                      <span className="text-[#8B6F47] font-bold">JM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">James Mitchell</div>
                      <div className="text-sm text-muted-foreground">Loyal Client</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -left-4 bg-[#8B6F47] text-white p-4 rounded-sm shadow-lg shadow-[#8B6F47]/20"
              >
                <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">20%</div>
                <div className="text-xs font-medium">First Visit</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm border border-[#8B6F47]/30 p-4 rounded-sm shadow-md"
              >
                <div className="flex items-center gap-2 text-[#8B6F47]">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Premium Care</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
    </section>
  );
}
