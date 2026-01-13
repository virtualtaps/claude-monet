"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const galleryItems = [
    { id: 1, category: "Hair", size: "large" },
    { id: 2, category: "Nails", size: "small" },
    { id: 3, category: "Makeup", size: "small" },
    { id: 4, category: "Lashes", size: "medium" },
    { id: 5, category: "Hair", size: "medium" },
    { id: 6, category: "Nails", size: "small" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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
                        Our Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                        <span className="text-foreground">Inspiration </span>
                        <span className="text-gold-gradient">Gallery</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Browse through our portfolio of stunning transformations and beautiful work
                        created by our talented team of specialists.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative overflow-hidden rounded-sm cursor-pointer ${item.size === "large"
                                ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                                : item.size === "medium"
                                    ? "aspect-[4/5]"
                                    : "aspect-square"
                                }`}
                        >
                            {/* Placeholder background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#111111]">
                                {/* Decorative pattern */}
                                <div className="absolute inset-0 diagonal-lines opacity-20" />

                                {/* Category text */}
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
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="text-gold font-medium hover:text-gold-light transition-colors duration-300 animated-underline">
                        View Full Gallery →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
