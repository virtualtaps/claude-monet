"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const schedule = [
  { day: "Monday - Friday", hours: "10:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "2380 S Eola Road, Aurora, Illinois, 60503",
    subContent: "Suite #110",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 331-901-2020",
    subContent: "For same day booking",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "claudemonetsalon@gmail.com",
    subContent: "We respond within 24 hours",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative elements */}
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-foreground">Visit Our </span>
            <span className="text-gold-gradient">Salon</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to welcome you to our luxurious salon. Stop by for a consultation 
            or book your appointment today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-[#E8DDD0] p-5 rounded-sm hover:border-[#8B6F47]/30 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B6F47]/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B6F47]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[#8B6F47]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-[family-name:var(--font-heading)]">
                        {item.title}
                      </h4>
                      <p className="text-[#8B6F47] font-medium">{item.content}</p>
                      <p className="text-sm text-muted-foreground">{item.subContent}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Schedule */}
            <div className="bg-white border border-[#E8DDD0] p-6 rounded-sm shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#8B6F47]" />
                <h4 className="font-semibold text-foreground font-[family-name:var(--font-heading)]">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className={`font-medium ${item.hours === "Closed" ? "text-red-400" : "text-[#8B6F47]"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full min-h-[400px] bg-white border border-[#E8DDD0] rounded-sm overflow-hidden relative shadow-sm">
              {/* Map Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Salon Location"
                  fill
                  className="object-cover opacity-60"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8]/80 to-[#FAF8F3]/80" />
              </div>
              
              {/* Location marker */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg shadow-[#8B6F47]/30">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8B6F47] rotate-45" />
                </motion.div>
              </div>

              {/* Get Directions button */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <Button
                  className="w-full bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold py-5 rounded-none transition-all duration-300"
                >
                  <Navigation className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
