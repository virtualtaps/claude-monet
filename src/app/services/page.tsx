"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useBooking } from "@/contexts/BookingContext";

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

export default function ServicesPage() {
    const { openDialog } = useBooking();

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
                            All Services
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Premium </span>
                            <span className="text-gold-gradient">Beauty & Grooming</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Discover our comprehensive range of luxury beauty and grooming services for men and women.
                            Each treatment is designed to enhance your natural beauty and leave you feeling renewed and confident.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {services.map((service) => (
                            <motion.div key={service.id} variants={itemVariants as any}>
                                <Link href={`/services/${service.slug}`}>
                                    <div className="service-card group relative bg-white border border-[#E8DDD0] p-6 rounded-sm hover:border-[#8B6F47]/30 transition-all duration-500 cursor-pointer h-full flex flex-col shadow-sm hover:shadow-md">
                                        {/* Popular badge */}
                                        {service.popular && (
                                            <div className="absolute -top-3 right-4 bg-[#8B6F47] text-white text-xs font-bold px-3 py-1 rounded-sm z-10">
                                                Popular
                                            </div>
                                        )}

                                        {/* Icon */}
                                        <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#8B6F47]/20 transition-colors duration-300">
                                            <service.icon className="w-7 h-7 text-[#8B6F47]" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold mb-3 text-foreground font-[family-name:var(--font-heading)] group-hover:text-[#8B6F47] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Price & Duration */}
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E8DDD0]">
                                            <div>
                                                <span className="text-[#8B6F47] font-semibold block">{service.price}</span>
                                                <span className="text-xs text-muted-foreground">{service.duration}</span>
                                            </div>
                                            <span className="text-muted-foreground hover:text-[#8B6F47] transition-colors font-medium text-sm">
                                                Learn More →
                                            </span>
                                        </div>

                                        {/* Hover accent */}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B6F47] group-hover:w-full transition-all duration-500" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#F5F0E8] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Ready to Book? </span>
                            <span className="text-gold-gradient">Contact Us Today</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Our team is ready to help you choose the perfect service for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact">
                                <Button
                                    size="lg"
                                    className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-8 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
                                >
                                    Get In Touch
                                </Button>
                            </Link>

                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
