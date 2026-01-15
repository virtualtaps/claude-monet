"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        slug: "burgundy-christmas-makeup",
        title: "Step-by-Step Guide: Burgundy Christmas Makeup Full of Glow",
        excerpt: "Be original this holiday season with our stunning burgundy makeup tutorial that will make you shine at every party.",
        category: "Makeup",
        date: "Dec 15, 2025",
        readTime: "5 min read",
        featured: true,
    },
    {
        id: 2,
        slug: "keratin-hair-straightening",
        title: "What Is Keratin Hair Straightening and Is It Suitable for Everyone?",
        excerpt: "Learn everything about keratin treatments, their benefits, and whether they're the right choice for your hair type.",
        category: "Hair Care",
        date: "Dec 10, 2025",
        readTime: "7 min read",
        featured: false,
    },
    {
        id: 3,
        slug: "chemical-peel-guide",
        title: "Chemical Peel: Renew the Skin and Reveal Its Radiance",
        excerpt: "Discover how chemical peels can transform your skin, reduce signs of aging, and give you that coveted glow.",
        category: "Skin Care",
        date: "Dec 5, 2025",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 4,
        slug: "lash-extension-care",
        title: "Complete Guide to Lash Extension Care and Maintenance",
        excerpt: "Everything you need to know about keeping your lash extensions looking perfect for weeks.",
        category: "Lashes",
        date: "Nov 28, 2025",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 5,
        slug: "russian-manicure-benefits",
        title: "Why Russian Manicure is Taking Over the Beauty World",
        excerpt: "Discover the secrets behind this precision technique and why it's becoming the go-to choice for nail enthusiasts.",
        category: "Nails",
        date: "Nov 20, 2025",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 6,
        slug: "winter-hair-care",
        title: "Essential Winter Hair Care Tips for Healthy, Shiny Locks",
        excerpt: "Protect your hair from winter damage with these expert tips and product recommendations.",
        category: "Hair Care",
        date: "Nov 15, 2025",
        readTime: "6 min read",
        featured: false,
    },
];

export default function BlogPage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

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
                            Beauty Tips
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                            <span className="text-foreground">All About </span>
                            <span className="text-gold-gradient">Cosmetics & Treatments</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Stay updated with the latest beauty trends, tips, and tutorials
                            from our expert team of beauty professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                    <span className="text-[#8B6F47] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                        Featured Post
                    </span>
                    <Link href={`/blog/${featuredPost.slug}`}>
                        <div className="group bg-white border border-[#E8DDD0] rounded-sm overflow-hidden hover:border-[#8B6F47]/30 transition-all duration-500 shadow-sm hover:shadow-md">
                                    <div className="grid md:grid-cols-2 gap-0">
                            {/* Image */}
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/20 to-transparent" />
                                <div className="absolute top-4 left-4 bg-[#8B6F47] text-white text-xs font-bold px-3 py-1 rounded-sm">
                                    {featuredPost.category}
                                </div>
                                <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/10 transition-colors duration-500" />
                            </div>

                                        {/* Content */}
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#8B6F47]" />
                                        <span>{featuredPost.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-[#8B6F47]" />
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-[#8B6F47] transition-colors duration-300 font-[family-name:var(--font-heading)]">
                                    {featuredPost.title}
                                </h2>

                                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                                {featuredPost.excerpt}
                                            </p>

                                            <Button
                                    variant="ghost"
                                    className="w-fit p-0 h-auto text-[#8B6F47] hover:text-[#A0826D] hover:bg-transparent font-medium group/btn"
                                            >
                                                Read More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-white border border-[#E8DDD0] rounded-sm overflow-hidden hover:border-[#8B6F47]/30 transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-md">
                        {/* Image */}
                        <div className="aspect-[16/10] relative overflow-hidden">
                            <Image
                                src={`https://images.unsplash.com/photo-${post.id === 2 ? '1522337360788-8b13dee7a37e' : post.id === 3 ? '1522337360788-8b13dee7a37e' : post.id === 4 ? '1560066984-138dadb4c035' : post.id === 5 ? '1522337360788-8b13dee7a37e' : '1522337360788-8b13dee7a37e'}?w=800&q=80`}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/20 to-transparent" />
                            <div className="absolute top-4 left-4 bg-[#8B6F47] text-white text-xs font-bold px-3 py-1 rounded-sm">
                                {post.category}
                            </div>
                            <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/10 transition-colors duration-500" />
                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Meta */}
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#8B6F47]" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-[#8B6F47]" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#8B6F47] transition-colors duration-300 font-[family-name:var(--font-heading)] line-clamp-2">
                                    {post.title}
                                </h3>

                                            {/* Excerpt */}
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <Button
                                    variant="ghost"
                                    className="w-fit p-0 h-auto text-[#8B6F47] hover:text-[#A0826D] hover:bg-transparent font-medium group/btn mt-auto"
                                >
                                    Read More
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            {/* Bottom accent line */}
                            <div className="h-0.5 w-0 bg-[#8B6F47] group-hover:w-full transition-all duration-500" />
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
