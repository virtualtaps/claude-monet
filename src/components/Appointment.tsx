"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Appointment() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
        
        {/* Wooden gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B6F47]/5 via-transparent to-[#8B6F47]/5" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#A0826D]/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8B6F47]/10 border border-[#8B6F47]/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#8B6F47]" />
              <span className="text-sm text-[#8B6F47] font-medium">Quick Appointment</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
              <span className="text-foreground">Ready for Your </span>
              <span className="text-gold-gradient">Transformation?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Our operators will conduct an initial consultation and make an 
              appointment for you to see a specialist. For same day booking, call us directly.
            </p>

            {/* Phone number highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white border border-[#8B6F47]/30 rounded-sm p-8 mb-10 shadow-lg"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#8B6F47] rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Call us now</p>
                  <p className="text-3xl md:text-4xl font-bold text-[#8B6F47] font-[family-name:var(--font-heading)]">
                    +1 331-901-2020
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-10 py-6 rounded-none group transition-all duration-300 hover:shadow-xl hover:shadow-[#8B6F47]/20"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10 px-10 py-6 rounded-none transition-all duration-300"
              >
                <Clock className="mr-2 w-5 h-5" />
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
