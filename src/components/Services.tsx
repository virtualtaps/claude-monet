"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="absolute top-40 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                        <span className="text-foreground">Premium </span>
                        <span className="text-gold-gradient">Beauty & Grooming</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Discover our comprehensive range of luxury beauty and grooming services for men and women.
                        Each treatment is designed to enhance your natural beauty and leave you feeling renewed and confident.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <Link key={service.id} href={`/services/${service.slug}`}>
                            <motion.div
                                variants={itemVariants as any}
                                className="service-card group relative bg-[#111111] border border-[#1a1a1a] p-6 rounded-sm hover:border-gold/30 transition-all duration-500 cursor-pointer"
                            >
                                {/* Popular badge */}
                                {service.popular && (
                                    <div className="absolute -top-3 right-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-sm">
                                        Popular
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-gold" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3 text-foreground font-[family-name:var(--font-heading)] group-hover:text-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a1a1a]">
                                    <span className="text-gold font-semibold">{service.price}</span>
                                    <span className="text-muted-foreground hover:text-gold transition-colors font-medium text-sm">
                                        Learn More →
                                    </span>
                                </div>

                                {/* Hover accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/services">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-gold/30 text-gold hover:bg-gold hover:text-black px-8 py-6 rounded-none transition-all duration-300"
                        >
                            View All Services
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
