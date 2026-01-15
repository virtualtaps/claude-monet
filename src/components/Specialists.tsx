"use client";

import { motion } from "framer-motion";
import { Instagram, Award } from "lucide-react";

const specialists = [
  {
    name: "Elena Volkov",
    role: "Master Stylist",
    specialty: "Hair Coloring & Cutting",
    experience: "12 years",
    initials: "EV",
  },
  {
    name: "Michael Rodriguez",
    role: "Master Barber",
    specialty: "Men's Grooming & Styling",
    experience: "10 years",
    initials: "MR",
  },
  {
    name: "Maria Santos",
    role: "Nail Artist",
    specialty: "Russian Manicure & Pedicure",
    experience: "8 years",
    initials: "MS",
  },
  {
    name: "Anna Chen",
    role: "Lash Specialist",
    specialty: "Volume Extensions",
    experience: "6 years",
    initials: "AC",
  },
];

export default function Specialists() {
  return (
    <section id="specialists" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-foreground">Meet Our </span>
            <span className="text-gold-gradient">Specialists</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our talented team of beauty professionals brings years of experience
            and passion to every service for both men and women, ensuring exceptional results every time.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-white border border-[#E8DDD0] rounded-sm overflow-hidden hover:border-[#8B6F47]/30 transition-all duration-500 shadow-sm hover:shadow-md">
                {/* Avatar area */}
                <div className="aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#E8DDD0] relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 diagonal-lines opacity-20" />

                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#8B6F47]/20 group-hover:text-[#8B6F47]/30 transition-colors duration-500 font-[family-name:var(--font-heading)]">
                      {specialist.initials}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/10 transition-colors duration-500" />

                  {/* Social icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-[#8B6F47]/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8B6F47]/30 transition-colors">
                      <Instagram className="w-5 h-5 text-[#8B6F47]" />
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <Award className="w-4 h-4 text-[#8B6F47]" />
                    <span className="text-xs text-[#8B6F47] font-medium">{specialist.experience}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[#8B6F47] transition-colors duration-300 font-[family-name:var(--font-heading)]">
                    {specialist.name}
                  </h3>
                  <p className="text-[#8B6F47] text-sm font-medium mb-2">{specialist.role}</p>
                  <p className="text-muted-foreground text-sm">{specialist.specialty}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B6F47] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
