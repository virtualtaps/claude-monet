"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Check, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { useBooking } from "@/contexts/BookingContext";

interface ServiceDetailProps {
    slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
                    <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
                    <Link href="/services">
                        <Button className="bg-[#8B6F47] hover:bg-[#A0826D] text-white">
                            Back to Services
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-[#FAF8F3]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#FAF8F3] to-[#F5F0E8] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A0826D]/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <Link href="/services">
                            <Button
                                variant="ghost"
                                className="text-muted-foreground hover:text-gold transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Services
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        {/* Category & Popular Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[#8B6F47] text-sm font-medium tracking-[0.2em] uppercase">
                                {service.category}
                            </span>
                            {service.popular && (
                                <span className="bg-[#8B6F47] text-white text-xs font-bold px-3 py-1 rounded-sm">
                                    Popular
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-20 h-20 bg-[#8B6F47]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-10 h-10 text-[#8B6F47]" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                                    <span className="text-foreground">{service.title}</span>
                                </h1>
                                <div className="flex items-center gap-6 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-[#8B6F47]">{service.price}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#8B6F47]" />
                                        <span>{service.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {service.fullDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                                <span className="text-foreground">What's </span>
                                <span className="text-gold-gradient">Included</span>
                            </h2>
                            <div className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white border border-[#E8DDD0] p-4 rounded-sm hover:border-[#8B6F47]/30 transition-colors shadow-sm"
                  >
                    <Check className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                                <span className="text-foreground">Key </span>
                                <span className="text-gold-gradient">Benefits</span>
                            </h2>
                            <div className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white border border-[#E8DDD0] p-4 rounded-sm hover:border-[#8B6F47]/30 transition-colors shadow-sm"
                  >
                    <Star className="w-5 h-5 text-[#8B6F47] fill-[#8B6F47] flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Ready to Experience </span>
                            <span className="text-gold-gradient">{service.title}?</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Book your appointment today and let our expert team transform your look.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={openDialog}
                                className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-10 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
                            >
                                Book Now
                            </Button>
                            <Link href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10 px-10 py-6 rounded-none transition-all duration-300"
                                >
                                    View All Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
