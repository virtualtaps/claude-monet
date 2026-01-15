"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Specialists from "@/components/Specialists";
import Image from "next/image";

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

const values = [
    {
        icon: Heart,
        title: "Passion",
        description: "We're passionate about making you feel beautiful and confident.",
    },
    {
        icon: Sparkles,
        title: "Excellence",
        description: "We strive for perfection in every service we provide.",
    },
    {
        icon: Users,
        title: "Care",
        description: "Your satisfaction and comfort are our top priorities.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F3]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#FAF8F3] to-[#F5F0E8] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A0826D]/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Where Luxury Meets </span>
                            <span className="text-gold-gradient">Artistry</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            At Claude Monet Salon & Spa, we believe everyone deserves to feel beautiful.
                            Our team of expert stylists and beauty professionals are dedicated to
                            providing exceptional services for both men and women in a luxurious, welcoming environment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                                    alt="Salon Interior"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/20 to-transparent" />
                                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-[#8B6F47]/30" />
                                <div className="absolute top-12 left-12 w-24 h-24 bg-[#8B6F47]/10" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/20 font-[family-name:var(--font-heading)] break-words px-4 drop-shadow-lg">
                                            Claude Monet
                                        </div>
                                        <div className="text-sm tracking-[0.5em] text-white/40 uppercase mt-2">
                                            Since 2010
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B6F47] via-[#A0826D] to-[#8B6F47]" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-8 -right-8 bg-[#8B6F47] text-white p-6 rounded-sm shadow-2xl shadow-[#8B6F47]/20"
                            >
                                <div className="text-4xl font-bold font-[family-name:var(--font-heading)]">15+</div>
                                <div className="text-sm font-medium">Years of Excellence</div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                                <span className="text-foreground">Our </span>
                                <span className="text-gold-gradient">Story</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                Founded in 2010, Claude Monet Salon & Spa has been a beacon of excellence in the beauty and grooming industry.
                                What started as a small salon with a big dream has grown into a premier destination for
                                men and women seeking the finest in beauty, grooming, and wellness services.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Using only premium products from world-renowned brands like Matrix, Moroccanoil,
                                Biolage, Lanza, Redken, and L'Oréal, we ensure every treatment delivers outstanding
                                results that exceed your expectations. Our commitment to continuous education and
                                staying at the forefront of beauty trends means you'll always receive the latest
                                techniques and innovations.
                            </p>
                            <Link href="/#contact">
                                <Button
                                    size="lg"
                                    className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-8 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
                                >
                                    Visit Our Salon
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Why Choose </span>
                            <span className="text-gold-gradient">Claude Monet?</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-[#E8DDD0] p-6 rounded-sm hover:border-[#8B6F47]/30 transition-all duration-300 text-center shadow-sm"
                            >
                                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-[#8B6F47]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground font-[family-name:var(--font-heading)]">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Our </span>
                            <span className="text-gold-gradient">Values</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-[#8B6F47]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-[#8B6F47]" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-foreground font-[family-name:var(--font-heading)]">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
                <Specialists />
            </section>
        </div>
    );
}
