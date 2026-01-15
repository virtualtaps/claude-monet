"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Coffee, Utensils } from "lucide-react";

const services = [
  { icon: Sparkles, name: "Beauty lounge" },
  { icon: Scissors, name: "Barber lounge" },
  { icon: Coffee, name: "Sheeshah" },
  { icon: Utensils, name: "Dining" },
];

export default function ServiceCards() {
  return (
    <section className="py-16 bg-[#FAF8F3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-[#E8DDD0] rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group flex-1 min-w-[150px] max-w-[200px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8B6F47]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#8B6F47]" />
                </div>
                <span className="text-base font-semibold text-foreground font-[family-name:var(--font-heading)]">
                  {service.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
