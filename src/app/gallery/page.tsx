"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useState } from "react";

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
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
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
            <section className="py-12 bg-[#0d0d0d] border-t border-[#1a1a1a]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-gold text-black"
                                        : "bg-[#111111] text-muted-foreground hover:text-gold border border-[#1a1a1a] hover:border-gold/30"
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
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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
                                {/* Placeholder background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#111111]">
                                    <div className="absolute inset-0 diagonal-lines opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl md:text-6xl font-bold text-gold/10 font-[family-name:var(--font-heading)]">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />

                                {/* Hover content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <Expand className="w-6 h-6 text-black" />
                                    </div>
                                </div>

                                {/* Category badge */}
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm text-gold font-medium">{item.category}</span>
                                </div>

                                {/* Border on hover */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-300 rounded-sm" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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
                                <button className="bg-gold hover:bg-gold-light text-black font-semibold px-10 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                                    Book Appointment
                                </button>
                            </a>
                            <a href="/services">
                                <button className="border border-gold/30 text-gold hover:bg-gold/10 px-10 py-6 rounded-none transition-all duration-300">
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
