"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in beauty services",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained and certified professionals",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 6 days a week for your convenience",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "Only the finest brands like Matrix & L'Oréal",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-pattern" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual element */}
              <div className="aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#262626] rounded-sm overflow-hidden relative">
                {/* Decorative pattern inside */}
                <div className="absolute inset-0 diagonal-lines opacity-30" />
                
                {/* Gold accent squares */}
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-gold/30" />
                <div className="absolute top-12 left-12 w-24 h-24 bg-gold/10" />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-gold/10 font-[family-name:var(--font-heading)] break-words px-4">
                      Claude Monet
                    </div>
                    <div className="text-sm tracking-[0.5em] text-gold/50 uppercase mt-2">
                      Since 2010
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gold text-black p-6 rounded-sm shadow-2xl shadow-gold/20"
              >
                <div className="text-4xl font-bold font-[family-name:var(--font-heading)]">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
              <span className="text-foreground">Where Luxury Meets </span>
              <span className="text-gold-gradient">Artistry</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Claude Monet Salon & Spa, we believe everyone deserves to look and feel their best. 
              Our team of expert stylists, barbers, and beauty professionals are dedicated to 
              providing exceptional beauty and grooming services for both men and women in a luxurious, welcoming environment.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Using only premium products from world-renowned brands like Matrix, 
              Moroccanoil, Biolage, Lanza, Redken, and L'Oréal, we ensure every 
              treatment delivers outstanding results that exceed your expectations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-[family-name:var(--font-heading)]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Meet Our Team
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
