"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const galleryItems = [
    { id: 1, category: "Hair", size: "large" },
    { id: 2, category: "Nails", size: "small" },
    { id: 3, category: "Makeup", size: "small" },
    { id: 4, category: "Lashes", size: "medium" },
    { id: 5, category: "Hair", size: "medium" },
    { id: 6, category: "Nails", size: "small" },
    { id: 7, category: "Makeup", size: "large" },
    { id: 8, category: "Hair", size: "small" },
    { id: 9, category: "Lashes", size: "medium" },
    { id: 10, category: "Nails", size: "small" },
    { id: 11, category: "Makeup", size: "medium" },
    { id: 12, category: "Hair", size: "small" },
];

const categories = ["All", "Hair", "Nails", "Makeup", "Lashes"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

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
                Our Work
            </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Inspiration </span>
                            <span className="text-gold-gradient">Gallery</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Browse through our portfolio of stunning transformations and beautiful work
                            created by our talented team of specialists.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-[#F5F0E8] border-t border-[#E8DDD0]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-[#8B6F47] text-white"
                                        : "bg-white text-muted-foreground hover:text-[#8B6F47] border border-[#E8DDD0] hover:border-[#8B6F47]/30"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className={`group relative overflow-hidden rounded-sm cursor-pointer ${item.size === "large"
                                        ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                                        : item.size === "medium"
                                            ? "aspect-[4/5]"
                                            : "aspect-square"
                                    }`}
                            >
                {/* Image from Unsplash */}
                <div className="absolute inset-0">
                  <Image
                    src={`https://images.unsplash.com/photo-${item.id === 1 ? '1522337360788-8b13dee7a37e' : item.id === 2 ? '1560066984-138dadb4c035' : item.id === 3 ? '1522337360788-8b13dee7a37e' : item.id === 4 ? '1522337360788-8b13dee7a37e' : '1522337360788-8b13dee7a37e'}?w=800&q=80`}
                    alt={item.category}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/10 to-transparent" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/20 transition-colors duration-500" />

                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-[#8B6F47] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Expand className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-[#8B6F47] font-medium">{item.category}</span>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8B6F47]/50 transition-colors duration-300 rounded-sm" />
                            </motion.div>
                        ))}
                    </motion.div>
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
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">Ready to Transform </span>
                            <span className="text-gold-gradient">Your Look?</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Book your appointment today and experience the Claude Monet difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#contact">
                                    <button className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-10 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20">
                                        Book Appointment
                                    </button>
                                </a>
                                <a href="/services">
                                    <button className="border border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10 px-10 py-6 rounded-none transition-all duration-300">
                                        View Services
                                    </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
